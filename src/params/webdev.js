
export const match = (param) => {
    if(param == "web-development" || param == 'kodulehtede-arendus'){
        return true;
    }else{
        return false;
    }

	//return /^\d+$/.test(param);
};