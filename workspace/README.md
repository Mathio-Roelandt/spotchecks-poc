# Spotchecks POC

Survey Sparrow Spotchecks POC repo

Specs:
NX: v20.4.6
Angular: v19.1.0
Capacitor: v7


Scripts:
"npm run build:ios" to build spotchecks app & sync to ios project
"npm run build:android" to build spotchecks app & sync to android project


Test case:
1. Set "surveysparrow-ionic-plugin" to "1.0.6" in package.json
2. Npm i
3. Run build:ios
4. Check Podfile => "SurveysparrowIonicPlugin" will be added

5. Set "surveysparrow-ionic-plugin" to "2.0.0" in package.json
6. Npm i
7. Run build:ios
8. Check Podfile => "SurveysparrowIonicPlugin" will be removed