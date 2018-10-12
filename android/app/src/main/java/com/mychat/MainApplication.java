package com.mychat;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.github.wuxudong.rncharts.MPAndroidChartPackage;
import com.horcrux.svg.SvgPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import io.invertase.firebase.RNFirebasePackage;
// import com.facebook.CallbackManager;
// import com.facebook.FacebookSdk;
// import com.facebook.appevents.AppEventsLogger;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage; 
import io.invertase.firebase.database.RNFirebaseDatabasePackage;


public class MainApplication extends Application implements ReactApplication {

  // private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  // protected static CallbackManager getCallbackManager() {
  //   return mCallbackManager;
  // }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new MPAndroidChartPackage(),
          new SvgPackage(),
          // new FBSDKPackage(mCallbackManager),

          new SplashScreenReactPackage(),
          new RNFirebasePackage(),
          new RNFirebaseAuthPackage(),
          new RNFirebaseFirestorePackage(),
          new RNFirebaseDatabasePackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    // AppEventsLogger.activateApp(this);
  }
}
