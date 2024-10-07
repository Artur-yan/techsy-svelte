
export const match = (param) => {
    if(param == "marketing" || param == 'turundusteenused'){
        return true;
    }else{
        return false;
    }

	//return /^\d+$/.test(param);
};