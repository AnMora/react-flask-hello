const be_url = "https://3001-orange-felidae-s1amg4i5.ws-us03.gitpod.io/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			favorites: [],
			basecocktail: [],
			jwtoken: null,
			sessionUID: null,
			sessionUser: null,
			randomcocktail: [],
			ingredient: [],
			modifier: [],
			rum_cocktail: [],
			gin_cocktail: [],
			vodka_cocktail: [],
			tequila_cocktail: [],
			whisky_cocktail: [],
			non_alcoholic: []
		},
		actions: {
			signup: async (first_name, last_name, email, password, birthday) => {
				const res = await fetch("https://3001-orange-felidae-s1amg4i5.ws-us03.gitpod.io/user", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						first_name: first_name,
						last_name: last_name,
						email: email,
						password: password,
						birthday: birthday
					})
				});
				if (res.ok) {
					alert(
						"Usted ha sido registrado exitosamente!, por favor ahora ingrese sus datos en Login para acceder a la página!"
					);
					return true;
				} else {
					alert("Usted no ha sido registrado!, favor intentar de nuevo!");
					return false;
				}
			},

			login: async (email, password) => {
				await fetch("https://3001-orange-felidae-s1amg4i5.ws-us03.gitpod.io/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
				})
					.then(response => response.json())
					.then(jwtoken => {
						if (typeof jwtoken.msg != "undefined") {
							Notify.error(jtwtoken.msg);
							alert("TOMATE`LO te da la bienvenida a nuestra página!");
						} else {
							console.log(jwtoken);
							alert("TOMATE`LO te da la bienvenida a nuestra página!");
							setStore({
								jwtoken: jwtoken.jwt,
								sessionUID: jwtoken.id,
								favorites: jwtoken.user.favorites
							}); //syntax {store:jwtoken.attr}
							console.log(getStore());
						}
					});
			},

			// forgotPass: password => {
			// 	// const store = store.recovery.toString();
			// 	fetch(`https://3001-orange-felidae-s1amg4i5.ws-us03.gitpod.io/${password}`, {
			// 		method: "PUT",
			// 		headers: { "Content-Type": "application/json" },
			// 		body: JSON.stringify(data)
			// 	})
			// 		.then((response = responde.json()))
			// 		.then(data => {
			// 			console.log(data);
			// 			alert("Password modificado satisfactoriamente");
			// 			setRedirect(true);
			// 		})
			// 		.catch(error => {
			// 			console.table("Error", error);
			// 		});
			// },

			signout: () => {
				alert("TOMATE`LO: Esperamos te haya gustado la página \n Visitanos pronto!");
				setStore({ jwtoken: null, sessionUID: null, sessionUser: null });
			},

			randCocktail: async () => {
				//It fetchs 10 cocktails via random
				const res = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php");
				cocktail = await res.json();
				setStore({ randomcocktail: cocktail.drinks });
			},

			info_non_alcoholicCocktail: async () => {
				//It gets base cocktails via filter classification
				const res = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non_Alcoholic");
				let cocktailList = [];
				const cocktail = await res.json();
				cocktail.drinks.forEach(item => {
					fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${item.idDrink}`)
						.then(res2 => res2.json())
						.then(data => {
							// console.log(data.drinks[0]);
							cocktailList.push(data.drinks[0]);
						});
				});
				setStore({ non_alcoholic: cocktailList });
			},

			info_rumCocktail: async () => {
				//It gets base cocktails via filter classification
				const res = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Rum");
				let cocktailList = [];
				const cocktail = await res.json();
				cocktail.drinks.forEach(item => {
					fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${item.idDrink}`)
						.then(res2 => res2.json())
						.then(data => {
							// console.log(data.drinks[0]);
							cocktailList.push(data.drinks[0]);
						});
				});
				setStore({ rum_cocktail: cocktailList });
			},

			info_vodkaCocktail: async () => {
				//It gets base cocktails via filter classification
				const res = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka");
				const cocktail = await res.json();
				let cocktailList = [];
				cocktail.drinks.forEach(item => {
					fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${item.idDrink}`)
						.then(res2 => res2.json())
						.then(data => {
							//console.log(data.drinks[0])
							// console.log(data.drinks[0]);
							cocktailList.push(data.drinks[0]);
						});
				});
				setStore({ vodka_cocktail: cocktailList });
			},

			info_tequilaCocktail: async () => {
				//It gets base cocktails via filter classification
				const res = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Tequila");
				const cocktail = await res.json();
				let cocktailList = [];
				cocktail.drinks.forEach(item => {
					fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${item.idDrink}`)
						.then(res2 => res2.json())
						.then(data => {
							cocktailList.push(data.drinks[0]);
						});
				});
				setStore({ tequila_cocktail: cocktailList });
			},

			info_whiskyCocktail: async () => {
				//It gets base cocktails via filter classification
				const res = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Brandy");
				const cocktail = await res.json();
				let cocktailList = [];
				cocktail.drinks.forEach(item => {
					fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${item.idDrink}`)
						.then(res2 => res2.json())
						.then(data => {
							cocktailList.push(data.drinks[0]);
						});
				});
				setStore({ whisky_cocktail: cocktailList });
			},

			info_ginCocktail: async () => {
				//It gets base cocktails via filter classification
				const res = await fetch("https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Gin");
				const cocktail = await res.json();
				let cocktailList = [];
				cocktail.drinks.forEach(item => {
					fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${item.idDrink}`)
						.then(res2 => res2.json())
						.then(data => {
							cocktailList.push(data.drinks[0]);
						});
				});
				setStore({ gin_cocktail: cocktailList });
			},

			checkFav: favName => {
				console.log("FAV: ", favName);
				const store = getStore();
				let existing = store.favorites.find(i => i.cocktail_name === favName);
				console.log("DONE: ", existing);
				if (existing != undefined) {
					return true;
				} else {
					return false;
				}
			},

			addFavorites: async (cocktail_id, cocktail_name) => {
				const store = getStore();
				let checking = await getActions().checkFav(cocktail_name);
				console.log("Checking:", checking);

				if (!checking) {
					await fetch("https://3001-orange-felidae-s1amg4i5.ws-us03.gitpod.io/favorite", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${store.jwtoken}`
						},
						body: JSON.stringify({
							cocktail_id: cocktail_id,
							cocktail_name: cocktail_name
						})
					})
						.then(response => response.json())
						.then(data => {
							setStore({ favorites: data });
						});
				}
			},

			getUserFavorites: id => {
				fetch(`https://3001-orange-felidae-s1amg4i5.ws-us03.gitpod.io/user/${id}`)
					.then(data => data.json())
					.then(response => {
						setStore({ favorites: response.favorites });
					});
			},
			//alternative Implementation for experimental testing
			counterFavorites: () => {
				const store = getStore();
				const length = store.favorites.length;
				return length;
			},

			deleteFavorites: async fav_id => {
				console.log(fav_id);

				const res = await fetch(`https://3001-orange-felidae-s1amg4i5.ws-us03.gitpod.io/favorite/${fav_id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${getStore().jwtoken}`
					}
				});
				const info = await res.json(); //traemos data del fetch
				console.log(info);
				const delFav = getStore().favorites;
				const existingFav = delFav.filter(i => i.id !== fav_id);
				setStore({ favorites: [...existingFav] });
			}

			// Use getActions to call a function within a fuction
		}
	};
};
export default getState;
