gdjs.Loading2Code = {};
gdjs.Loading2Code.localVariables = [];
gdjs.Loading2Code.idToCallbackMap = new Map();
gdjs.Loading2Code.GDCrunchStudioObjects1= [];
gdjs.Loading2Code.GDCrunchStudioObjects2= [];
gdjs.Loading2Code.GDCrunchStudioObjects3= [];
gdjs.Loading2Code.GDCrunchStudioObjects4= [];
gdjs.Loading2Code.GDKlouserGameLogoObjects1= [];
gdjs.Loading2Code.GDKlouserGameLogoObjects2= [];
gdjs.Loading2Code.GDKlouserGameLogoObjects3= [];
gdjs.Loading2Code.GDKlouserGameLogoObjects4= [];
gdjs.Loading2Code.GDClickTextObjects1= [];
gdjs.Loading2Code.GDClickTextObjects2= [];
gdjs.Loading2Code.GDClickTextObjects3= [];
gdjs.Loading2Code.GDClickTextObjects4= [];


gdjs.Loading2Code.eventsList0 = function(runtimeScene) {

};gdjs.Loading2Code.mapOfGDgdjs_9546Loading2Code_9546GDClickTextObjects2Objects = Hashtable.newFrom({"ClickText": gdjs.Loading2Code.GDClickTextObjects2});
gdjs.Loading2Code.asyncCallback14480228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading2Code.localVariables);
gdjs.Loading2Code.GDClickTextObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Loading2Code.mapOfGDgdjs_9546Loading2Code_9546GDClickTextObjects2Objects, 277, 1232, "");
}
gdjs.Loading2Code.localVariables.length = 0;
}
gdjs.Loading2Code.idToCallbackMap.set(14480228, gdjs.Loading2Code.asyncCallback14480228);
gdjs.Loading2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Loading2Code.asyncCallback14480228(runtimeScene, asyncObjectsList)), 14480228, asyncObjectsList);
}
}

}


};gdjs.Loading2Code.asyncCallback13583076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading2Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("KlouserGameLogo"), gdjs.Loading2Code.GDKlouserGameLogoObjects3);
{for(var i = 0, len = gdjs.Loading2Code.GDKlouserGameLogoObjects3.length ;i < len;++i) {
    gdjs.Loading2Code.GDKlouserGameLogoObjects3[i].getBehavior("Tween").addObjectOpacityTween2("AppacityLogo", 255, "easeInQuart", 2, false);
}
}
gdjs.Loading2Code.localVariables.length = 0;
}
gdjs.Loading2Code.idToCallbackMap.set(13583076, gdjs.Loading2Code.asyncCallback13583076);
gdjs.Loading2Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Loading2Code.asyncCallback13583076(runtimeScene, asyncObjectsList)), 13583076, asyncObjectsList);
}
}

}


};gdjs.Loading2Code.asyncCallback13340508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading2Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "MainScene5");
}
gdjs.Loading2Code.localVariables.length = 0;
}
gdjs.Loading2Code.idToCallbackMap.set(13340508, gdjs.Loading2Code.asyncCallback13340508);
gdjs.Loading2Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Loading2Code.asyncCallback13340508(runtimeScene, asyncObjectsList)), 13340508, asyncObjectsList);
}
}

}


};gdjs.Loading2Code.asyncCallback12513068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("KlouserGameLogo"), gdjs.Loading2Code.GDKlouserGameLogoObjects3);

{for(var i = 0, len = gdjs.Loading2Code.GDKlouserGameLogoObjects3.length ;i < len;++i) {
    gdjs.Loading2Code.GDKlouserGameLogoObjects3[i].getBehavior("Tween").addObjectOpacityTween2("AppacityLogo", 0, "easeOutQuart", 2, false);
}
}

{ //Subevents
gdjs.Loading2Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Loading2Code.localVariables.length = 0;
}
gdjs.Loading2Code.idToCallbackMap.set(12513068, gdjs.Loading2Code.asyncCallback12513068);
gdjs.Loading2Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading2Code.localVariables);
for (const obj of gdjs.Loading2Code.GDKlouserGameLogoObjects2) asyncObjectsList.addObject("KlouserGameLogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Loading2Code.asyncCallback12513068(runtimeScene, asyncObjectsList)), 12513068, asyncObjectsList);
}
}

}


};gdjs.Loading2Code.asyncCallback15830212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading2Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("KlouserGameLogo"), gdjs.Loading2Code.GDKlouserGameLogoObjects2);

{for(var i = 0, len = gdjs.Loading2Code.GDKlouserGameLogoObjects2.length ;i < len;++i) {
    gdjs.Loading2Code.GDKlouserGameLogoObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 5, 5, 5, 5, 0.08, false, null);
}
}

{ //Subevents
gdjs.Loading2Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Loading2Code.localVariables.length = 0;
}
gdjs.Loading2Code.idToCallbackMap.set(15830212, gdjs.Loading2Code.asyncCallback15830212);
gdjs.Loading2Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading2Code.localVariables);
for (const obj of gdjs.Loading2Code.GDKlouserGameLogoObjects1) asyncObjectsList.addObject("KlouserGameLogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Loading2Code.asyncCallback15830212(runtimeScene, asyncObjectsList)), 15830212, asyncObjectsList);
}
}

}


};gdjs.Loading2Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CrunchStudio"), gdjs.Loading2Code.GDCrunchStudioObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Loading2Code.GDCrunchStudioObjects2.length;i<l;++i) {
    if ( gdjs.Loading2Code.GDCrunchStudioObjects2[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.Loading2Code.GDCrunchStudioObjects2[k] = gdjs.Loading2Code.GDCrunchStudioObjects2[i];
        ++k;
    }
}
gdjs.Loading2Code.GDCrunchStudioObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Loading2Code.GDCrunchStudioObjects2 */
{for(var i = 0, len = gdjs.Loading2Code.GDCrunchStudioObjects2.length ;i < len;++i) {
    gdjs.Loading2Code.GDCrunchStudioObjects2[i].getBehavior("Tween").addObjectOpacityTween2("AppacityCr", 0, "easeInQuart", 2, false);
}
}

{ //Subevents
gdjs.Loading2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrunchStudio"), gdjs.Loading2Code.GDCrunchStudioObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Loading2Code.GDCrunchStudioObjects2.length;i<l;++i) {
    if ( gdjs.Loading2Code.GDCrunchStudioObjects2[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Loading2Code.GDCrunchStudioObjects2[k] = gdjs.Loading2Code.GDCrunchStudioObjects2[i];
        ++k;
    }
}
gdjs.Loading2Code.GDCrunchStudioObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Loading2Code.GDCrunchStudioObjects2 */
{for(var i = 0, len = gdjs.Loading2Code.GDCrunchStudioObjects2.length ;i < len;++i) {
    gdjs.Loading2Code.GDCrunchStudioObjects2[i].getBehavior("Animation").setAnimationName("Off");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("KlouserGameLogo"), gdjs.Loading2Code.GDKlouserGameLogoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Loading2Code.GDKlouserGameLogoObjects1.length;i<l;++i) {
    if ( gdjs.Loading2Code.GDKlouserGameLogoObjects1[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.Loading2Code.GDKlouserGameLogoObjects1[k] = gdjs.Loading2Code.GDKlouserGameLogoObjects1[i];
        ++k;
    }
}
gdjs.Loading2Code.GDKlouserGameLogoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10245196);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Отрыжка.wav", 1, false, 100, 1);
}

{ //Subevents
gdjs.Loading2Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Loading2Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CrunchStudio"), gdjs.Loading2Code.GDCrunchStudioObjects1);
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Отрыжка.wav");
}
{for(var i = 0, len = gdjs.Loading2Code.GDCrunchStudioObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDCrunchStudioObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Appacity", 255, "easeInQuart", 2, false);
}
}

{ //Subevents
gdjs.Loading2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrunchStudio"), gdjs.Loading2Code.GDCrunchStudioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Loading2Code.GDCrunchStudioObjects1.length;i<l;++i) {
    if ( gdjs.Loading2Code.GDCrunchStudioObjects1[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.Loading2Code.GDCrunchStudioObjects1[k] = gdjs.Loading2Code.GDCrunchStudioObjects1[i];
        ++k;
    }
}
gdjs.Loading2Code.GDCrunchStudioObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10278716);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Loading2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ClickText"), gdjs.Loading2Code.GDClickTextObjects1);
{for(var i = 0, len = gdjs.Loading2Code.GDClickTextObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDClickTextObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 2, 2, 2, 2, 0.08, false, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ClickText"), gdjs.Loading2Code.GDClickTextObjects1);
{for(var i = 0, len = gdjs.Loading2Code.GDClickTextObjects1.length ;i < len;++i) {
    gdjs.Loading2Code.GDClickTextObjects1[i].getBehavior("Tween").addObjectScaleTween3("Click", 0.0005, "linear", 0.2, true, true);
}
}

{ //Subevents
gdjs.Loading2Code.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.Loading2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Loading2Code.GDCrunchStudioObjects1.length = 0;
gdjs.Loading2Code.GDCrunchStudioObjects2.length = 0;
gdjs.Loading2Code.GDCrunchStudioObjects3.length = 0;
gdjs.Loading2Code.GDCrunchStudioObjects4.length = 0;
gdjs.Loading2Code.GDKlouserGameLogoObjects1.length = 0;
gdjs.Loading2Code.GDKlouserGameLogoObjects2.length = 0;
gdjs.Loading2Code.GDKlouserGameLogoObjects3.length = 0;
gdjs.Loading2Code.GDKlouserGameLogoObjects4.length = 0;
gdjs.Loading2Code.GDClickTextObjects1.length = 0;
gdjs.Loading2Code.GDClickTextObjects2.length = 0;
gdjs.Loading2Code.GDClickTextObjects3.length = 0;
gdjs.Loading2Code.GDClickTextObjects4.length = 0;

gdjs.Loading2Code.eventsList7(runtimeScene);
gdjs.Loading2Code.GDCrunchStudioObjects1.length = 0;
gdjs.Loading2Code.GDCrunchStudioObjects2.length = 0;
gdjs.Loading2Code.GDCrunchStudioObjects3.length = 0;
gdjs.Loading2Code.GDCrunchStudioObjects4.length = 0;
gdjs.Loading2Code.GDKlouserGameLogoObjects1.length = 0;
gdjs.Loading2Code.GDKlouserGameLogoObjects2.length = 0;
gdjs.Loading2Code.GDKlouserGameLogoObjects3.length = 0;
gdjs.Loading2Code.GDKlouserGameLogoObjects4.length = 0;
gdjs.Loading2Code.GDClickTextObjects1.length = 0;
gdjs.Loading2Code.GDClickTextObjects2.length = 0;
gdjs.Loading2Code.GDClickTextObjects3.length = 0;
gdjs.Loading2Code.GDClickTextObjects4.length = 0;


return;

}

gdjs['Loading2Code'] = gdjs.Loading2Code;
