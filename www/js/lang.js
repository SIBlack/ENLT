angular.module('starter.lang', [])
 
  .config(function($stateProvider, $urlRouterProvider, $translateProvider) {
        $translateProvider.translations('en', {
			login: "Login",
			regist: "Create new account",
			wordList: "Words List",
			title: "EN-LT Most Popular Words",
			email: "Email",
			password: "Password",
			logout: "LogOut",
			s_title: "Settings",
			s_select: "Change Language",
			admin: "Admin Panel",
			help: "Help",
			settings: "Settings",
			logout: "Logout",
			show: "English!",
			about: "About App",
			list_title: "Words List",
			add_title: "Add Words",
			help_title: "Help",
			add_button: "Add Word",
			add_ok: "Word Added",
			reg_title: "Registration",
			reg_button: "I already have user!",
			
        });

        $translateProvider.translations('lt', {
			login: "Prisijungti",
			regist: "Kurti nauja vartotoja",
			wordList: "Zodziai",
			title: "EN-LT Populiariausi Zodziai",
			email: "Elektroninis Pastas",
			password: "Slaptazodis",
			logout: "Atsijungti",
			s_title: "Nustatymai",
			s_select: "Programos kalba",
			admin: "Admin Panele",
			help: "Pagalba",
			settings: "Nustatymai",
			logout: "Atsijungti",
			show: "Lietuviskai!",
			about: "Apie Programa",
			list_title: "Zodziai",
			add_title: "Prideti Zodi",
			help_title: "Pagalba",
			add_button: "Prideti Zodi",
			add_ok: "Zodis Pridetas",
				reg_title: "Registracija",
				reg_button: "As jau Uzsiregistraves",
                                     
            
            
            
        });
// Default language
        $translateProvider.preferredLanguage("en");
//         $translateProvider.fallbackLanguage("en");
    });

