module.exports = {

    title:'xumoo Blog',
    description:'My Blog',
    base:'/',
    dest:'./dist',
    
    themeConfig:{
        nav:[
	    {text:'Homepage',link:'/'}
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
