function log_or_sign () {
    try {
        if(confirm("Можете покупать, или продавать акци")) {
            if(confirm("Надо сначала войти или зарегестриро")) {
                if(confirm("Войт")) {
                    if(confirm("Понадобиться вветси данны")) {
                        if(confirm("Введите своё им")) {
                            var usi_log1 = {
                                us_usei1: {
                                    us_usenm1:"igo",
                                    us_usesr1:"romane",
                                    us_useag1:"19"
                                }
                            };
                            if(usi_log1.hasOwnProperty("us_usei1.us_usenm1") == true && usi_log1.us_usei1.us_usenm1 == "igo") {
                                var us_lonm2;
                                var us_losr2;
                                var us_loag2;
                                us_lonm2 = prompt("Введиет своё им");
                                if(us_lonm2 != usi_log1.us_usei1.us_usenm1 && us_lonm2 != usi_log1.us_usei1.us_usesr1) throw new Error("У вас ошибка, поле не может быть пуст");
                                else if(us_lonm2 == usi_log1.us_usei1.us_usenm1 && us_lonm2 != usi_log1.us_usei1.us_usesr1) {
                                    us_losr2 = prompt("Введиет свою фамил");
                                    if(us_losr2 != usi_log1.us_usei1.us_usesr1 && us_losr2 != usi_log1.us_usei1.us_usenm1) throw new Error("У вас ошибка, поле не может быть пуст");
                                    else if(us_losr2 == usi_log1.us_usei1.us_usesr1 && us_losr2 != usi_log1.us_usei1.us_usenm1) {
                                        us_loag2 = prompt("Введиет свой возра");
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if(confirm("Зарегестриро")) {
    
                    }
                }
            }
        }
    }
    catch(e) {
        
    }
}