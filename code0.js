gdjs.LoadingCode = {};
gdjs.LoadingCode.localVariables = [];
gdjs.LoadingCode.idToCallbackMap = new Map();
gdjs.LoadingCode.GDCrunchStudioObjects1= [];
gdjs.LoadingCode.GDCrunchStudioObjects2= [];


gdjs.LoadingCode.asyncCallback14419868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene5", false);
}
gdjs.LoadingCode.localVariables.length = 0;
}
gdjs.LoadingCode.idToCallbackMap.set(14419868, gdjs.LoadingCode.asyncCallback14419868);
gdjs.LoadingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LoadingCode.asyncCallback14419868(runtimeScene, asyncObjectsList)), 14419868, asyncObjectsList);
}
}

}


};gdjs.LoadingCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CrunchStudio"), gdjs.LoadingCode.GDCrunchStudioObjects1);
{for(var i = 0, len = gdjs.LoadingCode.GDCrunchStudioObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDCrunchStudioObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Appacity", 255, "easeInQuart", 0.5, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrunchStudio"), gdjs.LoadingCode.GDCrunchStudioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoadingCode.GDCrunchStudioObjects1.length;i<l;++i) {
    if ( gdjs.LoadingCode.GDCrunchStudioObjects1[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.LoadingCode.GDCrunchStudioObjects1[k] = gdjs.LoadingCode.GDCrunchStudioObjects1[i];
        ++k;
    }
}
gdjs.LoadingCode.GDCrunchStudioObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LoadingCode.GDCrunchStudioObjects1 */
{for(var i = 0, len = gdjs.LoadingCode.GDCrunchStudioObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDCrunchStudioObjects1[i].getBehavior("Animation").setAnimationName("On");
}
}

{ //Subevents
gdjs.LoadingCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrunchStudio"), gdjs.LoadingCode.GDCrunchStudioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoadingCode.GDCrunchStudioObjects1.length;i<l;++i) {
    if ( gdjs.LoadingCode.GDCrunchStudioObjects1[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.LoadingCode.GDCrunchStudioObjects1[k] = gdjs.LoadingCode.GDCrunchStudioObjects1[i];
        ++k;
    }
}
gdjs.LoadingCode.GDCrunchStudioObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LoadingCode.GDCrunchStudioObjects1 */
{for(var i = 0, len = gdjs.LoadingCode.GDCrunchStudioObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDCrunchStudioObjects1[i].getBehavior("Animation").setAnimationName("Off");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Loading");
}
}

}


};

gdjs.LoadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingCode.GDCrunchStudioObjects1.length = 0;
gdjs.LoadingCode.GDCrunchStudioObjects2.length = 0;

gdjs.LoadingCode.eventsList1(runtimeScene);
gdjs.LoadingCode.GDCrunchStudioObjects1.length = 0;
gdjs.LoadingCode.GDCrunchStudioObjects2.length = 0;


return;

}

gdjs['LoadingCode'] = gdjs.LoadingCode;
