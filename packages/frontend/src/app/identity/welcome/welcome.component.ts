import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {



  public headingText2 = "Features";
  public descriptionText2 = "Aren't you tired of jumping through hoops? Why is the security owness on you? Just use your email address to jump from one application to another.";
  public imageURL2 = "/assets/secure_passwordless_entry.png";

  public featureHeading1 = "Simple";
  public featureDescription1 = "No passwords to remember. Just use your email address to gain access.";
  public featureIcon1 = "icon-login";

  public featureHeading2 = "High Security";
  public featureDescription2 = "Authorization occurs from checking your email inbox and clicking a link. This ensures it's actually you logging in.";
  public featureIcon2 = "icon-logout";

  public featureHeading3 = "No Security Breach concerns";
  public featureDescription3 = "Never worry about security breaches again, security breaches are now someone's worry because your password is never compromised because you don't have one.";
  public featureIcon3 = "icon-layers";

  public featureHeading4 = "Productivity";
  public featureDescription4 = "Quicker sign in and sign outs. ";
  public featureIcon4 = "icon-rocket";

  public featureHeading5 = "Reliability";
  public featureDescription5 = "The only one that has access to your login is whoever has access to your email, and 99% of the time that person is you.";
  public featureIcon5 = "icon-user";

  public featureHeading6 = "Integration";
  public featureDescription6 = "Integrating with all the tpp the software products. More added weekly.";
  public featureIcon6 = "icon-social-google";


  
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }



}
