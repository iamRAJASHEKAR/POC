import { CommonActions, StackActions } from "@react-navigation/native";
import _ from "lodash";

class CNavigator {
    navigator: any;
    constructor() {
        this.navigator = null;
    }
    setTopLevelNavigator(navigatorRef: any) {
        if (!_.isEmpty(navigatorRef)) {
            this.navigator = navigatorRef;
        }
    }
    pushView(name: string, params?: any) {
        this.navigator.dispatch(
            CommonActions.navigate({ name, params })
        );
    }
    pop() {
        this.navigator.dispatch(StackActions.pop());
    }

    popToTop() {
        this.navigator.dispatch(StackActions.popToTop());
    }

    popByPreviousIndex(idx: number) {
        this.navigator.dispatch(StackActions.pop(idx));
    }
    
    replace(name: string, params?: any){
          this.navigator.reset({
            index: 0,
            routes: [{ name, params }],
            });
    }

    popToView(name: string, params?: any) {
        this.navigator.dispatch(StackActions.popToTop());
        this.navigator.navigate({ name, params });
    }
}
let cNavInst = new CNavigator();
export default cNavInst;
