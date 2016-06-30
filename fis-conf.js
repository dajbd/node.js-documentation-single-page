fis.match('*', {
    release: false
})

fis.match('*.htm', {
    release: function() {
    	// console.log('\n',JSON.stringify(arguments))
    	/*
    	{
    	 	"0": ["/6.2.2/About this Documentation Node.js v6.2.2 Manual & Documentation.htm"],
    	 	"1": "/6.2.2/About this Documentation Node.js v6.2.2 Manual & Documentation.htm"
    	}
    	*/
        return arguments[1].replace('About this Documentation', '').trim()
    }
})
