# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

First, here is a little background.  There are three core web technologies.  Hypertext Markup Language (HTML) is the standard for describing, structuring and creating web pages and applications.  HTML syntax and notation provide organized information to the browser from a page.  Cascading Style Sheets (CSS) is a language used to describe, style and separate presentation from content.  It addresses how a web page looks, feels, formats and styles (layout, colors and fonts).  CSS styles allow rapid change to websites and defines overall themes.  The separation enables information flexibility and accessibility across web pages.  JavaScript (JS) is a programming language that allows code use in a website to increase flexibility and web page interaction.  It has curly bracket syntax ({}) an object orientation and class functions.  Most websites and major browsers support it.

When we hit https://www.techtonic.com/ what happens?  When you click the link, a browser collects information about the request and checks a Domain Name System (DNS) database records, a list of Uniform Resource Locator (URL = website) and Internet Protocol (IP) addresses.  Each URL (www.techtonic.com) has a unique IP (http://104.20.3.95, 104.20. 2.95) address, a directory list of names.  DNSs are human-friendly and easy to remember.  

The browser checks four caches (memory to hold frequently used data).  It first checks the browser cache for websites visited recently.  Then checks the operating system cache for DNS records.  Next, it checks a router’s (connects devices and networks) cache for records.  Last, it checks the internet service provider (ISP) cache for the record.

After the browser gets the right IP address, it connects to the matching server. To transfer data between client and server, a three-way handshake of exchanges occurs where client asks the server if it is open for new connections.  If the server is open, an access point accepts and acts on new connections.  Then client receives open acknowledgement.  Finally, data transmission connection is established.

The server sends back the response which contains the web page requested.

## From start to finish, how does data reach you to be rendered in the browser?

A browser must convert HTML, CSS and JavaScript for a website to work.  A browser is a software application that presents and displays content for your interaction.  The core component inside the browser is an engine, and there are different engines for browsers.  The engine for Brave is Google’s Blink.

In order to send and receive information over the internet, it must send data packets.  When you open your browser, it reads the data.

The data is converted to characters in a html file.  In a process called parsing, the characters are analyzed into parts to help translate and execute code.  These parts (characters) are called tokens.  A parser understands (“<html>”) and follows rules.    

After tokens are created, they are converted into nodes which have certain properties. After creating nodes, the nodes are connected to a DOM tree data structure that establishes relationships (parent-child, et.,).  Since in web design, you open a file with HTML, the browser transforms the data of html data into DOM to start.

The browser will also request a stylesheet and a css file with raw CSS data. Then, the raw CSS data is converted to characters, tokenized, form nodes and another tree structure called CSSOM (CSS Object Model) is created.  Again, the browser recognizes the converted forms in the tree structure.  Are we rendered yet?

The DOM (HTML element’s information) and CSSDOM (style elements) are independent and lack commonality.  Now the browser merges DOM + CSSDOM into a render tree with all the required DOM content and all required different node CSSOM information.  What now?

After assembling the render tree, we know need to present the layout.  Content and style information is visible however un-rendered.  For each page object, the browser determines the precise size, position and location.  Here layout is working in concert with the DOM and CSSOM.

With the information, layout, DOM (content) and CSSOM (style) in concert the browser represents the node on the screen.  We have rendering!  Now what about JavaScript?

JavaScript is used to modify page content and styling.  This also means that it can negatively impact the DOM tree and CSSOM properties.  The problem is that the HTML parser building the DOM encountered a script tag before completing execution.  So, placement matters because the network is affected by calls meaning that the DOM is halted a multitude of times for milliseconds.  The same applies for CSSOM.

## What code is rendered in the browser?

A browser engine transforms HTML interprets CSS and JS is a dedicated engine decoupled from browser engines.

## What is the server-side code’s main function?

In web applications and programming there is a “client”, a web browser (Brave) and a “server” a web application service that processes a web request or sends pages.  The web apps contain both “server-side” and “client-side” code.

Since there is never a constant connection between the browser (client) and web server, the majority of processing is done on the server-side. It efficiently delivers information tailored to users for a better experience. A company like NetFlix uses server-side programing and processing to offer trends, search results and recommendations.  The code interacts with fixed storage or files when a page is requested and when information is reposted to the server. Other examples include navigating to pages and saving/retrieving data.  Languages include PHP, Java, Perl and Ruby on Rails.  There are advantages and limitations to both types of code.


## What is the client-side code’s main function?

Client-side programming is mainly about the user interface and the browser running code such as JavaScript.  The client-side code is embedded on the client web page and processes in the browser.  Its uses include interactive webpages, dynamic pages, sending requests to services and content delivery.  Additionally, client-side code improves the appearance and rending of a page like UI components, and navigation.  It is best suited for pages that people need to change without contacting and underlying database.  Other languages include HTML, CSS, and any language running on the client device that interacts with a remote service.  There are advantages and limitations to both types of code.

## What is runtime?

Runtime refers to a program that is running or executing on a computer system.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I really am unsure how to answer this question.  Through developer tools, I found 1 HTML instance that references numerous elements; 2 matches for style, 28 img matches and 9 script (JS) match.

## How many instances of the server-side code are available at any given time?

How would I know this from a client-side perspective without understand the architecture, services available and the number of users.

## How many instances of the databases connected to the server application are created?

Unless there is more information available it is difficult to answer this question.  Just by having www.techtonic.com without technical documentation it is hard to say.
