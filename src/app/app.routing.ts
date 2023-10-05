import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
{ path: "home", component: HomeComponent },
{ path: "about", component: AboutComponent },
{ path: "blog", component: BlogComponent },
{ path: "contact", component: ContactComponent },
{ path: "", component: HomeComponent }]
export const routing = RouterModule.forRoot(routes);