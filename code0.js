gdjs.LoadingCode = {};
gdjs.LoadingCode.localVariables = [];
gdjs.LoadingCode.idToCallbackMap = new Map();
gdjs.LoadingCode.GDCrunchStudioObjects1= [];
gdjs.LoadingCode.GDCrunchStudioObjects2= [];
gdjs.LoadingCode.GDCrunchStudioObjects3= [];
gdjs.LoadingCode.GDCrunchStudioObjects4= [];
gdjs.LoadingCode.GDKlouserGameLogoObjects1= [];
gdjs.LoadingCode.GDKlouserGameLogoObjects2= [];
gdjs.LoadingCode.GDKlouserGameLogoObjects3= [];
gdjs.LoadingCode.GDKlouserGameLogoObjects4= [];
gdjs.LoadingCode.GDClickTextObjects1= [];
gdjs.LoadingCode.GDClickTextObjects2= [];
gdjs.LoadingCode.GDClickTextObjects3= [];
gdjs.LoadingCode.GDClickTextObjects4= [];


gdjs.LoadingCode.mapOfGDgdjs_9546LoadingCode_9546GDClickTextObjects2Objects = Hashtable.newFrom({"ClickText": gdjs.LoadingCode.GDClickTextObjects2});
gdjs.LoadingCode.asyncCallback15816148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadingCode.localVariables);
gdjs.LoadingCode.GDClickTextObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.LoadingCode.mapOfGDgdjs_9546LoadingCode_9546GDClickTextObjects2Objects, 277, 1232, "");
}
gdjs.LoadingCode.localVariables.length = 0;
}
gdjs.LoadingCode.idToCallbackMap.set(15816148, gdjs.LoadingCode.asyncCallback15816148);
gdjs.LoadingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LoadingCode.asyncCallback15816148(runtimeScene, asyncObjectsList)), 15816148, asyncObjectsList);
}
}

}


};gdjs.LoadingCode.asyncCallback15820388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadingCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("KlouserGameLogo"), gdjs.LoadingCode.GDKlouserGameLogoObjects3);
{for(var i = 0, len = gdjs.LoadingCode.GDKlouserGameLogoObjects3.length ;i < len;++i) {
    gdjs.LoadingCode.GDKlouserGameLogoObjects3[i].getBehavior("Tween").addObjectOpacityTween2("AppacityLogo", 255, "easeInQuart", 2, false);
}
}
gdjs.LoadingCode.localVariables.length = 0;
}
gdjs.LoadingCode.idToCallbackMap.set(15820388, gdjs.LoadingCode.asyncCallback15820388);
gdjs.LoadingCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LoadingCode.asyncCallback15820388(runtimeScene, asyncObjectsList)), 15820388, asyncObjectsList);
}
}

}


};gdjs.LoadingCode.asyncCallback15823556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadingCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "MainScene5");
}
gdjs.LoadingCode.localVariables.length = 0;
}
gdjs.LoadingCode.idToCallbackMap.set(15823556, gdjs.LoadingCode.asyncCallback15823556);
gdjs.LoadingCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LoadingCode.asyncCallback15823556(runtimeScene, asyncObjectsList)), 15823556, asyncObjectsList);
}
}

}


};gdjs.LoadingCode.asyncCallback15823460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadingCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("KlouserGameLogo"), gdjs.LoadingCode.GDKlouserGameLogoObjects3);

{for(var i = 0, len = gdjs.LoadingCode.GDKlouserGameLogoObjects3.length ;i < len;++i) {
    gdjs.LoadingCode.GDKlouserGameLogoObjects3[i].getBehavior("Tween").addObjectOpacityTween2("AppacityLogo", 0, "easeOutQuart", 2, false);
}
}

{ //Subevents
gdjs.LoadingCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LoadingCode.localVariables.length = 0;
}
gdjs.LoadingCode.idToCallbackMap.set(15823460, gdjs.LoadingCode.asyncCallback15823460);
gdjs.LoadingCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadingCode.localVariables);
for (const obj of gdjs.LoadingCode.GDKlouserGameLogoObjects2) asyncObjectsList.addObject("KlouserGameLogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LoadingCode.asyncCallback15823460(runtimeScene, asyncObjectsList)), 15823460, asyncObjectsList);
}
}

}


};gdjs.LoadingCode.asyncCallback15822932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadingCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("KlouserGameLogo"), gdjs.LoadingCode.GDKlouserGameLogoObjects2);

{for(var i = 0, len = gdjs.LoadingCode.GDKlouserGameLogoObjects2.length ;i < len;++i) {
    gdjs.LoadingCode.GDKlouserGameLogoObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 5, 5, 5, 5, 0.08, false, null);
}
}

{ //Subevents
gdjs.LoadingCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LoadingCode.localVariables.length = 0;
}
gdjs.LoadingCode.idToCallbackMap.set(15822932, gdjs.LoadingCode.asyncCallback15822932);
gdjs.LoadingCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadingCode.localVariables);
for (const obj of gdjs.LoadingCode.GDKlouserGameLogoObjects1) asyncObjectsList.addObject("KlouserGameLogo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.LoadingCode.asyncCallback15822932(runtimeScene, asyncObjectsList)), 15822932, asyncObjectsList);
}
}

}


};gdjs.LoadingCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CrunchStudio"), gdjs.LoadingCode.GDCrunchStudioObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoadingCode.GDCrunchStudioObjects2.length;i<l;++i) {
    if ( gdjs.LoadingCode.GDCrunchStudioObjects2[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.LoadingCode.GDCrunchStudioObjects2[k] = gdjs.LoadingCode.GDCrunchStudioObjects2[i];
        ++k;
    }
}
gdjs.LoadingCode.GDCrunchStudioObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LoadingCode.GDCrunchStudioObjects2 */
{for(var i = 0, len = gdjs.LoadingCode.GDCrunchStudioObjects2.length ;i < len;++i) {
    gdjs.LoadingCode.GDCrunchStudioObjects2[i].getBehavior("Tween").addObjectOpacityTween2("AppacityCr", 0, "easeInQuart", 2, false);
}
}

{ //Subevents
gdjs.LoadingCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrunchStudio"), gdjs.LoadingCode.GDCrunchStudioObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoadingCode.GDCrunchStudioObjects2.length;i<l;++i) {
    if ( gdjs.LoadingCode.GDCrunchStudioObjects2[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.LoadingCode.GDCrunchStudioObjects2[k] = gdjs.LoadingCode.GDCrunchStudioObjects2[i];
        ++k;
    }
}
gdjs.LoadingCode.GDCrunchStudioObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LoadingCode.GDCrunchStudioObjects2 */
{for(var i = 0, len = gdjs.LoadingCode.GDCrunchStudioObjects2.length ;i < len;++i) {
    gdjs.LoadingCode.GDCrunchStudioObjects2[i].getBehavior("Animation").setAnimationName("Off");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("KlouserGameLogo"), gdjs.LoadingCode.GDKlouserGameLogoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoadingCode.GDKlouserGameLogoObjects1.length;i<l;++i) {
    if ( gdjs.LoadingCode.GDKlouserGameLogoObjects1[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.LoadingCode.GDKlouserGameLogoObjects1[k] = gdjs.LoadingCode.GDKlouserGameLogoObjects1[i];
        ++k;
    }
}
gdjs.LoadingCode.GDKlouserGameLogoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15822372);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Отрыжка.wav", 1, false, 100, 1);
}

{ //Subevents
gdjs.LoadingCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.LoadingCode.eventsList6 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("CrunchStudio"), gdjs.LoadingCode.GDCrunchStudioObjects1);
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Отрыжка.wav");
}
{for(var i = 0, len = gdjs.LoadingCode.GDCrunchStudioObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDCrunchStudioObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Appacity", 255, "easeInQuart", 2, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrunchStudio"), gdjs.LoadingCode.GDCrunchStudioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoadingCode.GDCrunchStudioObjects1.length;i<l;++i) {
    if ( gdjs.LoadingCode.GDCrunchStudioObjects1[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.LoadingCode.GDCrunchStudioObjects1[k] = gdjs.LoadingCode.GDCrunchStudioObjects1[i];
        ++k;
    }
}
gdjs.LoadingCode.GDCrunchStudioObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15816444);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoadingCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("ClickText"), gdjs.LoadingCode.GDClickTextObjects1);
{for(var i = 0, len = gdjs.LoadingCode.GDClickTextObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDClickTextObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 2, 2, 2, 2, 0.08, false, null);
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
gdjs.copyArray(runtimeScene.getObjects("ClickText"), gdjs.LoadingCode.GDClickTextObjects1);
{for(var i = 0, len = gdjs.LoadingCode.GDClickTextObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDClickTextObjects1[i].getBehavior("Tween").addObjectScaleTween3("Click", 0.0005, "linear", 0.2, true, true);
}
}

{ //Subevents
gdjs.LoadingCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.LoadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingCode.GDCrunchStudioObjects1.length = 0;
gdjs.LoadingCode.GDCrunchStudioObjects2.length = 0;
gdjs.LoadingCode.GDCrunchStudioObjects3.length = 0;
gdjs.LoadingCode.GDCrunchStudioObjects4.length = 0;
gdjs.LoadingCode.GDKlouserGameLogoObjects1.length = 0;
gdjs.LoadingCode.GDKlouserGameLogoObjects2.length = 0;
gdjs.LoadingCode.GDKlouserGameLogoObjects3.length = 0;
gdjs.LoadingCode.GDKlouserGameLogoObjects4.length = 0;
gdjs.LoadingCode.GDClickTextObjects1.length = 0;
gdjs.LoadingCode.GDClickTextObjects2.length = 0;
gdjs.LoadingCode.GDClickTextObjects3.length = 0;
gdjs.LoadingCode.GDClickTextObjects4.length = 0;

gdjs.LoadingCode.eventsList6(runtimeScene);
gdjs.LoadingCode.GDCrunchStudioObjects1.length = 0;
gdjs.LoadingCode.GDCrunchStudioObjects2.length = 0;
gdjs.LoadingCode.GDCrunchStudioObjects3.length = 0;
gdjs.LoadingCode.GDCrunchStudioObjects4.length = 0;
gdjs.LoadingCode.GDKlouserGameLogoObjects1.length = 0;
gdjs.LoadingCode.GDKlouserGameLogoObjects2.length = 0;
gdjs.LoadingCode.GDKlouserGameLogoObjects3.length = 0;
gdjs.LoadingCode.GDKlouserGameLogoObjects4.length = 0;
gdjs.LoadingCode.GDClickTextObjects1.length = 0;
gdjs.LoadingCode.GDClickTextObjects2.length = 0;
gdjs.LoadingCode.GDClickTextObjects3.length = 0;
gdjs.LoadingCode.GDClickTextObjects4.length = 0;


return;

}

gdjs['LoadingCode'] = gdjs.LoadingCode;
