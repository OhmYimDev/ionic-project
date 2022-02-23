import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'doisuthep',
    loadChildren: () => import('./doisuthep/doisuthep.module').then( m => m.DoisuthepPageModule)
  },
  {
    path: 'phrasingh',
    loadChildren: () => import('./phrasingh/phrasingh.module').then( m => m.PhrasinghPageModule)
  },
  {
    path: 'photharam',
    loadChildren: () => import('./photharam/photharam.module').then( m => m.PhotharamPageModule)
  },
  {
    path: 'chedi',
    loadChildren: () => import('./chedi/chedi.module').then( m => m.ChediPageModule)
  },
  {
    path: 'world',
    loadChildren: () => import('./world/world.module').then( m => m.WorldPageModule)
  },
  {
    path: 'museum',
    loadChildren: () => import('./museum/museum.module').then( m => m.MuseumPageModule)
  },
  {
    path: 'culturalcenter',
    loadChildren: () => import('./culturalcenter/culturalcenter.module').then( m => m.CulturalcenterPageModule)
  },
  {
    path: 'ratchapruek',
    loadChildren: () => import('./ratchapruek/ratchapruek.module').then( m => m.RatchapruekPageModule)
  },
  {
    path: 'wiangkumkam',
    loadChildren: () => import('./wiangkumkam/wiangkumkam.module').then( m => m.WiangkumkamPageModule)
  },
  {
    path: 'srisuphan',
    loadChildren: () => import('./srisuphan/srisuphan.module').then( m => m.SrisuphanPageModule)
  },
  {
    path: 'checkin',
    loadChildren: () => import('./checkin/checkin.module').then( m => m.CheckinPageModule)
  },
  {
    path: 'checkin2',
    loadChildren: () => import('./checkin2/checkin2.module').then( m => m.Checkin2PageModule)
  },
  {
    path: 'checkin3',
    loadChildren: () => import('./checkin3/checkin3.module').then( m => m.Checkin3PageModule)
  },
  {
    path: 'checkin4',
    loadChildren: () => import('./checkin4/checkin4.module').then( m => m.Checkin4PageModule)
  },
  {
    path: 'checkin5',
    loadChildren: () => import('./checkin5/checkin5.module').then( m => m.Checkin5PageModule)
  },
  {
    path: 'checkin6',
    loadChildren: () => import('./checkin6/checkin6.module').then( m => m.Checkin6PageModule)
  },
  {
    path: 'checkin7',
    loadChildren: () => import('./checkin7/checkin7.module').then( m => m.Checkin7PageModule)
  },
  {
    path: 'checkin8',
    loadChildren: () => import('./checkin8/checkin8.module').then( m => m.Checkin8PageModule)
  },
  {
    path: 'checkin9',
    loadChildren: () => import('./checkin9/checkin9.module').then( m => m.Checkin9PageModule)
  },
  {
    path: 'checkin10',
    loadChildren: () => import('./checkin10/checkin10.module').then( m => m.Checkin10PageModule)
  },
  {
    path: 'review1',
    loadChildren: () => import('./review1/review1.module').then( m => m.Review1PageModule)
  },
  {
    path: 'review2',
    loadChildren: () => import('./review2/review2.module').then( m => m.Review2PageModule)
  },
  {
    path: 'review3',
    loadChildren: () => import('./review3/review3.module').then( m => m.Review3PageModule)
  },
  {
    path: 'review4',
    loadChildren: () => import('./review4/review4.module').then( m => m.Review4PageModule)
  },
  {
    path: 'review5',
    loadChildren: () => import('./review5/review5.module').then( m => m.Review5PageModule)
  },
  {
    path: 'review6',
    loadChildren: () => import('./review6/review6.module').then( m => m.Review6PageModule)
  },
  {
    path: 'review7',
    loadChildren: () => import('./review7/review7.module').then( m => m.Review7PageModule)
  },
  {
    path: 'review8',
    loadChildren: () => import('./review8/review8.module').then( m => m.Review8PageModule)
  },
  {
    path: 'review9',
    loadChildren: () => import('./review9/review9.module').then( m => m.Review9PageModule)
  },
  {
    path: 'review10',
    loadChildren: () => import('./review10/review10.module').then( m => m.Review10PageModule)
  },
  {
    path: 'score',
    loadChildren: () => import('./score/score.module').then( m => m.ScorePageModule)
  },
  {
    path: 'chant',
    loadChildren: () => import('./chant/chant.module').then( m => m.ChantPageModule)
  },
  {
    path: 'virtue',
    loadChildren: () => import('./virtue/virtue.module').then( m => m.VirtuePageModule)
  },
  {
    path: 'birthday',
    loadChildren: () => import('./birthday/birthday.module').then( m => m.BirthdayPageModule)
  },
  {
    path: 'phonenumber',
    loadChildren: () => import('./phonenumber/phonenumber.module').then( m => m.PhonenumberPageModule)
  },
  {
    path: 'monday',
    loadChildren: () => import('./monday/monday.module').then( m => m.MondayPageModule)
  },
  {
    path: 'tuesday',
    loadChildren: () => import('./tuesday/tuesday.module').then( m => m.TuesdayPageModule)
  },
  {
    path: 'wednesday',
    loadChildren: () => import('./wednesday/wednesday.module').then( m => m.WednesdayPageModule)
  },
  {
    path: 'thursday',
    loadChildren: () => import('./thursday/thursday.module').then( m => m.ThursdayPageModule)
  },
  {
    path: 'friday',
    loadChildren: () => import('./friday/friday.module').then( m => m.FridayPageModule)
  },
  {
    path: 'saturday',
    loadChildren: () => import('./saturday/saturday.module').then( m => m.SaturdayPageModule)
  },
  {
    path: 'sunday',
    loadChildren: () => import('./sunday/sunday.module').then( m => m.SundayPageModule)
  },
  {
    path: 'scorereviews',
    loadChildren: () => import('./scorereviews/scorereviews.module').then( m => m.ScorereviewsPageModule)
  },
  {
    path: 'recommend',
    loadChildren: () => import('./recommend/recommend.module').then( m => m.RecommendPageModule)
  },
  {
    path: 'other-attr',
    loadChildren: () => import('./other-attr/other-attr.module').then( m => m.OtherAttrPageModule)
  },
  {
    path: 'other-reviews',
    loadChildren: () => import('./other-reviews/other-reviews.module').then( m => m.OtherReviewsPageModule)
  },
  {
    path: 'edit-article',
    loadChildren: () => import('./edit-article/edit-article.module').then( m => m.EditArticlePageModule)
  },
  {
    path: 'edit-review',
    loadChildren: () => import('./edit-review/edit-review.module').then( m => m.EditReviewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
