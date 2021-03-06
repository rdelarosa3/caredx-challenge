/*
This file is generated and isn't the actual source code for this
managed global class.
This read-only file shows the class's global constructors,
methods, variables, and properties.
To enable code to compile, all methods return null.
*/
global abstract class SkuidponentImpl implements skuid.Skuidponent {
    global Map<String,Object> componentData;
    global String componentId;
    global String cssLoads;
    global String cssOutput;
    global Set<String> customLabels;
    global dom.XmlNode data;
    global Map<String,Object> definition;
    global String htmlOutput;
    global String jsLoads;
    global String jsOutput;
    global SkuidponentImpl() {

    }
    global SkuidponentImpl(dom.XmlNode data) {

    }
    global SkuidponentImpl(String componentId) {

    }
    global void append(skuid.Skuidponent c) {

    }
    global void append(List<dom.XmlNode> childSkuidponents) {

    }
    global abstract void generate();
    global String getCSS() {
        return null;
    }
    global String getCSSLoads() {
        return null;
    }
    global virtual Map<String,Object> getComponentData() {
        return null;
    }
    global Set<String> getCustomLabels() {
        return null;
    }
    global virtual Map<String,Object> getDefinition() {
        return null;
    }
    global String getHTML() {
        return null;
    }
    global String getJS() {
        return null;
    }
    global String getJSLoads() {
        return null;
    }
    global void load(dom.XmlNode data) {

    }
    global virtual void setComponentData(Map<String,Object> componentData) {

    }
    global virtual void setDefinition(Map<String,Object> definition) {

    }
}
