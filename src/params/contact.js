
export const match = (param) => {
    if(param == "contact" || param == "kontakt"){
        return true;
    }else{
        return false;
    }
	//return /^\d+$/.test(param);
};