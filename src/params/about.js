
export const match = (param) => {
    if(param == "about-us" || param == "meist"){
        return true;
    }else{
        return false;
    }
	//return /^\d+$/.test(param);
};