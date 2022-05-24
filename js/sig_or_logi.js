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
                                    us_useag1:"19",
                                    us_useba1:"1390"
                                }
                            };

                            var us_lodo1 = {
                                us_dlh1:"13",
                                us_dlh2:"15",
                                us_dlh3:"11",
                                us_dlh4:"19",
                                us_dlh5:"17"
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
        if(confirm("Ваши свойства зарегестрирова")) {
            if(confirm("Это платная функц")) {
                if(confirm("Введите ваше им")) {
                    var us_pnm1;
                    var us_psr1;
                    var us_pag1;
                    us_pnm1 = prompt("Введиет своё им");
                    if(us_pnm1 != usi_log1.us_usei1.us_usenm1 && us_pnm1 != usi_log1.us_usei1.us_usesr1) {
                        us_psr1 = prompt("Введиет свою фамил");
                        if(us_psr1 != usi_log1.us_usei1.us_usesr1 && us_psr1 != usi_log1.us_usei1.us_usenm1) {
                            us_pag1 = prompt("Введиет свой возра");
                            if(us_pag1 != usi_log1.us_usei1.us_useag1 && us_pag1 != usi_log1.us_usei1.us_usesr1) {
                                if(confirm("Ваши данные сохране")) {
                                    if(confirm("Можете теперь сделать свой i")) {
                                        if(confirm("Эта функция плат")) {
                                            Object.defineProperty(usi_log1, "us_usenm2", {value:us_pnm1, writable:true, enumerable:true, configurable:true});
                                            if(usi_log1.hasOwnProperty("us_usenm2") == true && usi_log1.us_usenm2 == us_pnm1) {
                                                if(confirm("Данные сохранены, но не все, можете сразу сделать свой i")) {
                                                    if(confirm("Это платн")) {
                                                        Object.defineProperty(usi_log1, "us_usesr2", {value:us_psr1, writable:true, enumerable:true, configurable:true});
                                                        if(usi_log1.hasOwnProperty("us_usesr2") == true && usi_log1.us_usesr2 == us_psr1) {
                                                            Object.defineProperty(usi_log1, "us_useag2", {value:us_pag1, writable:true, enumerable:true, configurable:true});
                                                            if(usi_log1.hasOwnProperty("us_useag2") == true && usi_log1.us_useag2 == us_pag1) {
                                                                if(confirm("Ваши данные сохоане")) {
                                                                    if(confirm("Можете посмотреть свой бала")) {
                                                                        if(confirm("Это тоже плат")) {
                                                                            Object.defineProperty(usi_log1, "us_useba2", {value:"1199", writable:true, enumerable:true, configurable:true});
                                                                            if(usi_log1.hasOwnProperty("us_useba2") == true && usi_log1.us_useba2 == "1199") {
                                                                                if(confirm("Ваш балан" + " " + usi_log1.us_useba2)) {
                                                                                    if(confirm("Можете переходить к функц")) {
                                                                                        if(confirm("Но сначала заплатите за платные функ")) {
                                                                                            if(confirm("Посмотреть дол")) {
                                                                                                if(confirm("Долг в объек")) {

                                                                                                } else {
                                                                                                    if(confirm("Долг в масси")) {
                                                                                                        var us_dhl2 = [us_lodo1.us_dlh1, us_lodo1.us_dlh2, us_lodo1.us_dlh3, us_lodo1.us_dlh4, us_lodo1.us_dlh5];
                                                                                                        if(us_dhl2[0] != us_dhl2[1] && us_dhl2[1] != us_dhl2[3]) {
                                                                                                            if(confirm("Надо его отсортирова")) {
                                                                                                                if(confirm("Эта функция плат")) {
                                                                                                                    var us_srl2 = [];
                                                                                                                    if(confirm("Но плату посчитаем сраз")) {
                                                                                                                        us_srl2.push(190);
                                                                                                                        if(confirm("Конечно же, надо ещё превратить это всё в одну строк")) {
                                                                                                                            if(confirm("За эту функцию, тоже снимется плат")) {
                                                                                                                                for(var i = 0; i < us_dhl2.length; i++) {
                                                                                                                                    if(us_dhl2[i] == undefined || us_dhl2[i] == 0) continue;
                                                                                                                                    us_srl2 = us_dhl2[i];
                                                                                                                                }
                                                                                                                                if(confirm("Массив был отсортирован, терпеь надо его превратить в стро")) {
                                                                                                                                    if(confirm("За эту функцию тоже снимется плат")) {
                                                                                                                                        us_srl2.join(" ");
                                                                                                                                        us_srl2.push(190);
                                                                                                                                        us_srl2.push(130);
                                                                                                                                        if(confirm("Начинается отсортировка элементов масси")) {
                                                                                                                                            us_srl2.sort();
                                                                                                                                            if(confirm("Отсортировка заверше")) {
                                                                                                                                                if(confirm("Можем ещё все строки сложить в одну сумм")) {
                                                                                                                                                    if(confirm("За это плата тоже возмётс")) {
                                                                                                                                                        var us_srl3 = [];
                                                                                                                                                        us_srl2.forEach(function(x) {
                                                                                                                                                            x + x;
                                                                                                                                                            us_srl3 += x;
                                                                                                                                                        })
                                                                                                                                                        us_srl3.join(" ");
                                                                                                                                                        us_srl3.push(139);
                                                                                                                                                        if(confirm("Массив отсортирова, и готов к показани")) {
                                                                                                                                                            if(confirm("Точно гото")) {
                                                                                                                                                                if(confirm("Ваш дол" + " " + us_srl3 + "$")) {
                                                                                                                                                                    if(confirm("Оплачивае")) {
                                                                                                                                                                        if(confirm("Гото")) {
                                                                                                                                                                            if(confirm("Вагш баланс, минус дол")) {
                                                                                                                                                                                if(confirm("Ваш балан" + " " + usi_log1.us_useba2 + "$")) {
                                                                                                                                                                                    if(confirm("Мы оплачи")) {
                                                                                                                                                                                        if(confirm("Точно гото")) {
                                                                                                                                                                                            var us_srl4 = [];
                                                                                                                                                                                            if(usi_log1.us_useba2 > us_srl3 && us_srl3 < usi_log1.us_useba2) {
                                                                                                                                                                                                if(confirm("У вас не хватае дене")) {
                                                                                                                                                                                                }
                                                                                                                                                                                            } else if(usi_log1.us_useba2 < us_srl3 && us_srl3 > usi_log1.us_useba2) {
                                                                                                                                                                                                if(confirm("Оплачу")) {
                                                                                                                                                                                                    if(confirm(""))
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if(confirm("В бесплатной фунцкции, не будет добавл")) {

                }
            }
        }
    }
}
