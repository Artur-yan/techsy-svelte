
export const match = (param) => {
    if(param == "mobile-development" || param == 'mobiilirakenduste-arendus'){
        return true;
    }else{
        return false;
    }

	//return /^\d+$/.test(param);
};