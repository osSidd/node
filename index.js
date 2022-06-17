const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync('./project/index.html','utf8')
const aboutPage = fs.readFileSync('./project/about.html','utf8')
const contactPage = fs.readFileSync('./project/contact.html','utf8')
const errorPage = fs.readFileSync('./project/404.html','utf8')

const server = http.createServer((req,res) => {
	const url = req.url
	
	if(url === '/'){
		res.statusCode = 200
		res.setHeader('Content-Type' , 'text/html')
		res.write(homePage)
		res.end()
	}
	
	else if(url === '/about'){
		res.statusCode = 200
		res.setHeader('Content-Type' , 'text/html')
		res.write(aboutPage)
		res.end()
	}
	
	else if(url === '/contact'){
		res.statusCode = 200
		res.setHeader('Content-Type' , 'text/html')
		res.write(contactPage)
		res.end()
	}
	
	else{
		res.statusCode = 200
		res.setHeader('Content-Type' , 'text/html')
		res.write(errorPage)
		res.end()
	}
})

server.listen(8080)
