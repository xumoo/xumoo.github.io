module.exports = {

    title:'随手记',
    description:'My Blog',
    base:'/',
    dest:'./dist',
    
    themeConfig:{
        nav:[
        {text:'首页',link:'/'},
        {text:'随手记',link:'/随手记/Menu.md'},
        {text:'Github',link:'https://github.com/xumoo'}
	],
	sidebar:{

	},
    },
    
    markdown:{
        anchor:{},
        config:md => {
	    md.use(require('markdown-it-katex'))
	}
    }
};
