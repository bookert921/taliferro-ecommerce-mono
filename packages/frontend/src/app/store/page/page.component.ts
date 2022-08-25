import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { ShoppingCartComponent } from 'src/app/shared/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from 'src/app/shared/components/check-out/check-out.component';
import { Catalog2Component } from 'src/app/shared/components/catalog2/catalog2.component';
import { CartService } from 'src/app/shared/services/cart.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ColorsService } from 'src/app/shared/services/colors.service';
import { ProductTypeService } from 'src/app/shared/services/product-type.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SubCategoryService } from 'src/app/shared/services/sub-category.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SettingService } from 'src/app/shared/services/setting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnDestroy {

  private _dataSubscription?: Subscription;

  @ViewChild(ShoppingCartComponent)
  private _shoppingCartComponent!: ShoppingCartComponent;


  @ViewChild(CheckOutComponent)
  private _checkOutComponent!: CheckOutComponent;


  @ViewChild(Catalog2Component)
  private _catalog2Component!: Catalog2Component;

  homeSection: boolean = true;
  aboutSection: boolean = true;
  checkOutSection: boolean = true;
  aboutProduct1: boolean = false;
  aboutProduct2: boolean = false;
  aboutProduct3: boolean = false;
  howTo: boolean = false;
  video1: boolean = false;
  video2: boolean = false;
  faq1: boolean = false;
  faq2: boolean = false;
  faq3: boolean = false;
  features1: boolean = false;
  features2: boolean = false;
  features3: boolean = false;
  colorBlock: boolean = false;
  text_only_catalog: boolean = false;
  medicalSection: boolean = false;
  catalogSection: boolean = true;
  subCategoryItems: any;
  products: any;
  allProducts: any;
  isUserSite: boolean = false;

  isPageSetup: boolean = false;

  siteType: any = 'simple';

  data: any;
  public color = "#000000";
  public background = "#ffffff";

  public imageIndex: number = 0;
  public isPractice: boolean = false;
  public isAdmin: boolean = false;

  private _appointmentsSubscription?: Subscription;
  private _subCategorySubscription?: Subscription;
  private _productSubscription?: Subscription;
  private _userSubscription?: Subscription;

  constructor(protected _dataService: DataService, public cartService: CartService, public userService: UserService,
    protected _categoryService: CategoryService,
    protected _subCategoryService: SubCategoryService,
    protected _productService: ProductService,
    protected _productTypeService: ProductTypeService,
    protected _settingService: SettingService,
    private _router: Router,
    public authService: AuthService) {
      if (!environment.production)
      console.log("PageComponent");
  }

  ngOnInit(): void {
    // this.listenForUser();
    this.checkSettings();

    if (!environment.production)
      console.log("PageComponent - Settings", this._settingService.settings);
  }

  ngOnDestroy(): void {
    if (this._dataSubscription)
      this._dataSubscription.unsubscribe();
    if (this._appointmentsSubscription)
      this._appointmentsSubscription.unsubscribe();
    if (this._subCategorySubscription)
      this._subCategorySubscription.unsubscribe();
    if (this._productSubscription)
      this._productSubscription.unsubscribe();
    if (this._userSubscription)
      this._userSubscription.unsubscribe();
  }

  private listenForUser(): void {
    this._userSubscription = this.userService.userSubject.subscribe((user) => {
      if (!environment.production)
        console.log("PageComponent - We have user from firebase", user);

      if (!this._settingService.settings && user.companyId)  {
        this._settingService.retrieveSettings(user.companyId);  
        this._settingService.item?.subscribe((setting) => {
          if (setting.hasOwnProperty('companyName')) {
            this._settingService.settings = setting;
            this.data = setting;
            this.checkSettings();
          }

        })
      } 

    });
  }

  private checkSettings(): void {
    if (this._settingService.settings && this._settingService.settings.hasOwnProperty('companyName')) {
      if (!environment.production)
        console.log("PageComponent- checkSettings: Settings are Valid", this._settingService.settings);

      this.data = this._settingService.settings;
      this.populate();
      this.checkIfUserSite();
    } else {
      if (!environment.production)
        console.log("PageComponent - checkSettings: Settings are INVALID");


      this.checkPageTypeForValidSetting();
    }
  }

  private checkPageTypeForValidSetting(): void {
    if (this.authService.firebaseUser) {
      // Page display is for administrator
      if (!environment.production)
        console.log("Firebase User", this.authService.firebaseUser);
      this._router.navigate(['setup-required'])

    } else {
      // Page is for user
      if (!environment.production)
        console.log("Regular User");

      this._router.navigate(['shop', 'store-under-construction']);  
    }
  }

  private populate(): void {
    this._productService.getAll();
    this._productTypeService.getAll();
    this._categoryService.getAll();
    this._subCategoryService.getAll();
    this.setUpPage();
    this.setSectionsToDisplay();
    this.checkIfPageSetup();
    this.establishProducts();
    this.establishSubCategories();

  }

  private setUpPage(): void {
    if (!environment.production)
      console.log("Page Settings", this.data);

    if (this.data && this.data.color) {
      this.color = this.data.color;
      this.background = ColorsService.hexToRGB(this.color);
    }

    // Pull site type from environment it it exist otherwise get from settings
    if (environment.siteType)
      this.siteType = environment.siteType
    else if (this.data.siteType)
      this.siteType = this.data.siteType;

    // Calculate random image for home section
    if (this.data && this.data.files && this.data.files.length)
      this.imageIndex = this.getRandomInt(this.data.files.length);


  }

  private checkIfUserSite(): void {
    try {
      if (this._settingService.settings)
        this.isUserSite = (this.userService.user?.companyId === this._settingService.settings._id);

      if (!environment.production)
        console.log("Comparing", this._settingService.settings._id, this.userService.user?.companyId);

    } catch (error) {
      console.error("ERROR", "User", this.userService.user, "Settings", this._settingService.settings)
    }
  }

  private checkIfPageSetup(): void {
    this.isPageSetup ? (
      this.homeSection ||
      this.aboutProduct1 ||
      this.aboutProduct2 ||
      this.aboutProduct3 ||
      this.features1 ||
      this.features2 ||
      this.features3 ||
      this.howTo ||
      this.video1 ||
      this.catalogSection ||
      this.checkOutSection ||
      this.aboutSection ||
      this.video2 ||
      this.faq1 ||
      this.faq2 ||
      this.faq3
    ) : false;

    if (!environment.production)
      console.log("isPageSetup", this.isPageSetup)
  }

  private establishProducts(): void {
    if (!environment.production)
      console.log("Product Subscription");

    this._productSubscription = this._productService.items?.subscribe((products) => {
      this.allProducts = products;
      this.products = this.allProducts;
      if (!environment.production)
        console.log("Total number ot products", this.allProducts.length);
    })

  }

  private establishSubCategories(): void {
    if (!environment.production)
      console.log("Sub categories Subscription");
    this._subCategorySubscription = this._subCategoryService.items?.subscribe((items) => {
      this.subCategoryItems = items;
      if (!environment.production)
        console.log("Total number ot sub categories", this.subCategoryItems.length);
    });
  }


  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  totalUp(): void {
    this._shoppingCartComponent.totalUp();
  }

  totalUpDropShippingCart(): void {
    this._shoppingCartComponent.totalUpDropShippingCart();
  }

  itemRemoved(): void {
    if (!environment.production)
      console.log("Item Removed");
    this._catalog2Component.checkCartDependency();
  }

  setSectionsToDisplay(): void {
    this.homeSection = (this.data.hasOwnProperty("homeSection")) ? this.data.homeSection : false;
    this.checkOutSection = (this.data.hasOwnProperty("checkoutSection")) ? this.data.checkoutSection : false;
    this.aboutSection = (this.data.hasOwnProperty("aboutSection")) ? this.data.aboutSection : false;
    this.aboutProduct1 = (this.data.hasOwnProperty("aboutProduct1Section")) ? this.data.aboutProduct1Section : false;
    this.aboutProduct2 = (this.data.hasOwnProperty("aboutProduct2_section")) ? this.data.aboutProduct2_section : false;
    this.aboutProduct3 = (this.data.hasOwnProperty("aboutProduct3Section")) ? this.data.aboutProduct3Section : false;
    this.howTo = (this.data.hasOwnProperty("howTo1Section")) ? this.data.howTo1Section : false;
    this.video1 = (this.data.hasOwnProperty("aboutVideo1Section")) ? this.data.aboutVideo1Section : false;
    this.video2 = (this.data.hasOwnProperty("aboutVideo2Section")) ? this.data.aboutVideo2Section : false;
    this.faq1 = (this.data.hasOwnProperty("aboutFaq1Section")) ? this.data.aboutFaq1Section : false;
    this.faq2 = (this.data.hasOwnProperty("aboutFaq2Section")) ? this.data.aboutFaq2Section : false;
    this.faq3 = (this.data.hasOwnProperty("aboutFaq3Section")) ? this.data.aboutFaq3Section : false;
    this.features1 = (this.data.hasOwnProperty("aboutFeatures1Section")) ? this.data.aboutFeatures1Section : false;
    this.features2 = (this.data.hasOwnProperty("aboutFeatures2Section")) ? this.data.aboutFeatures2Section : false;
    this.features3 = (this.data.hasOwnProperty("aboutFeatures3Section")) ? this.data.aboutFeatures3Section : false;
    this.colorBlock = (this.data.hasOwnProperty("colorBlock")) ? this.data.colorBlock : false;
    this.text_only_catalog = (this.data.hasOwnProperty("text_only_catalog")) ? this.data.text_only_catalog : false;
    this.medicalSection = (this.data.hasOwnProperty("medical_section")) ? this.data.medical_section : false;
    this.catalogSection = (this.data.hasOwnProperty("catalogSection")) ? this.data.catalogSection : false;
  }



}
