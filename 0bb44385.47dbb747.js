(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(l,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(h,c(c({ref:t},i),{},{components:n})):o.a.createElement(h,c({ref:t},i))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(110)),l={id:"op-install",title:"OpenProject - Manual Installation",slug:"/openproject-install"},c={unversionedId:"op-install",id:"op-install",isDocsHomePage:!1,title:"OpenProject - Manual Installation",description:"The following instructions is for the version 11.1.0 of OpenProject. The sources mentioned in this guide are available here.",source:"@site/project-management/op-install.md",slug:"/openproject-install",permalink:"/project-management/openproject-install",editUrl:"https://github.com/btey/MyDocs/edit/master/project-management/op-install.md",version:"current",sidebar:"projectManagement"},s=[{value:"1. Create a dedicated OpenProject user",id:"1-create-a-dedicated-openproject-user",children:[]},{value:"2. Install the required system dependencies",id:"2-install-the-required-system-dependencies",children:[]},{value:"3. Install the caching server (memcached)",id:"3-install-the-caching-server-memcached",children:[]},{value:"4. Install and setup PostgreSQL database server",id:"4-install-and-setup-postgresql-database-server",children:[]},{value:"5. Installation of Ruby",id:"5-installation-of-ruby",children:[]},{value:"6. Installation of Node",id:"6-installation-of-node",children:[{value:"6.1 Install from your dist repo (recommended)",id:"61-install-from-your-dist-repo-recommended",children:[]},{value:"6.2 Manual installation",id:"62-manual-installation",children:[]},{value:"6.3 Check <code>node</code> version",id:"63-check-node-version",children:[]}]},{value:"7. Installation of OpenProject",id:"7-installation-of-openproject",children:[]},{value:"8. Configure OpenProject",id:"8-configure-openproject",children:[]},{value:"9. Finish the installation of OpenProject",id:"9-finish-the-installation-of-openproject",children:[{value:"9.1 Secret token",id:"91-secret-token",children:[]},{value:"9.2 Database creation and Assets precompilation",id:"92-database-creation-and-assets-precompilation",children:[]}]},{value:"10. Serve OpenProject with Apache and Passenger",id:"10-serve-openproject-with-apache-and-passenger",children:[]},{value:"11. Activate background jobs",id:"11-activate-background-jobs",children:[{value:"11.1 Inbound email",id:"111-inbound-email",children:[]},{value:"11.2 Outbound emails",id:"112-outbound-emails",children:[]},{value:"11.3 Add scripts to crontab",id:"113-add-scripts-to-crontab",children:[]}]},{value:"12. Troubleshooting",id:"12-troubleshooting",children:[]}],i={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The following instructions is for the version ",Object(r.b)("strong",{parentName:"p"},"11.1.0")," of OpenProject. The sources mentioned in this guide are available ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/btey/openproject"}),"here"),"."))),Object(r.b)("p",null,"Please be aware that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This guide has been tested with (x64) Debian 10, Ubuntu 18.04 and Ubuntu 20.04 installation with administrative rights (i.e. you must be able to sudo)."),Object(r.b)("li",{parentName:"ul"},"OpenProject will be installed with a PostgreSQL database."),Object(r.b)("li",{parentName:"ul"},"OpenProject will be served in a production environment with the Apache server (should work similarly with other servers, like nginx and others)")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"user")," is the operating system user the command is executed with. In this case it will be ",Object(r.b)("inlineCode",{parentName:"p"},"root")," for most of the time or ",Object(r.b)("inlineCode",{parentName:"p"},"openproject"),"."),Object(r.b)("h2",{id:"1-create-a-dedicated-openproject-user"},"1. Create a dedicated OpenProject user"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo groupadd openproject\nsudo useradd --create-home --gid openproject openproject\nsudo passwd openproject #(enter desired password)\n")),Object(r.b)("h2",{id:"2-install-the-required-system-dependencies"},"2. Install the required system dependencies"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[root@host] apt update -y\n[root@host] apt install -y zlib1g-dev build-essential           \\\n                libssl-dev libreadline-dev                      \\\n                libyaml-dev libgdbm-dev                         \\\n                libncurses5-dev automake                        \\\n                libtool bison libffi-dev git curl               \\\n                poppler-utils unrtf tesseract-ocr catdoc        \\\n                libxml2 libxml2-dev libxslt1-dev # nokogiri     \\\n                imagemagick\n")),Object(r.b)("h2",{id:"3-install-the-caching-server-memcached"},"3. Install the caching server (memcached)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[root@host] apt install -y memcached\n")),Object(r.b)("h2",{id:"4-install-and-setup-postgresql-database-server"},"4. Install and setup PostgreSQL database server"),Object(r.b)("p",null,"OpenProject requires PostgreSQL v9.5+."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[root@host] apt install postgresql postgresql-contrib libpq-dev\n")),Object(r.b)("p",null,"Switch to the PostgreSQL system user."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[root@host] su - postgres\n")),Object(r.b)("p",null,"As PostgreSQL user, create the database user for OpenProject. This will prompt you for a password. We are going to assume in the following guide that this password is \u2018openproject\u2019, but choose a strong password."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[postgres@host] createuser -W openproject\n")),Object(r.b)("p",null,"Next, create the database owned by the new user:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[postgres@host] createdb -O openproject openproject\n")),Object(r.b)("p",null,"Lastly, revert to the previous system user:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[postgres@host] exit\n# You will be root again now.\n")),Object(r.b)("h2",{id:"5-installation-of-ruby"},"5. Installation of Ruby"),Object(r.b)("p",null,"The are several possibilities to install Ruby. In this guide we'll use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://rbenv.org/"}),"rbenv"),". Please be aware that the actual installation of a specific Ruby version takes some time to finish."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[root@host] su openproject --login\n[openproject@host] git clone https://github.com/sstephenson/rbenv.git ~/.rbenv\n[openproject@host] echo 'export PATH=\"$HOME/.rbenv/bin:$PATH\"' >> ~/.profile\n[openproject@host] echo 'eval \"$(rbenv init -)\"' >> ~/.profile\n[openproject@host] source ~/.profile\n[openproject@host] git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build\n\n[openproject@host] rbenv install 2.7.1\n[openproject@host] rbenv rehash\n[openproject@host] rbenv global 2.7.1\n")),Object(r.b)("p",null,"To check our Ruby installation we run ",Object(r.b)("inlineCode",{parentName:"p"},"ruby --version"),". It should output something very similar to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ruby 2.7.1pXYZ (....) [x86_64-linux]\n")),Object(r.b)("h2",{id:"6-installation-of-node"},"6. Installation of Node"),Object(r.b)("p",null,"The are several possibilities to install Node on your machine: from your distribution repository or manual installation."),Object(r.b)("h3",{id:"61-install-from-your-dist-repo-recommended"},"6.1 Install from your dist repo (recommended)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt install nodejs npm\n")),Object(r.b)("h3",{id:"62-manual-installation"},"6.2 Manual installation"),Object(r.b)("p",null,"We will use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OiNutter/nodenv#installation"}),"nodenv"),". Please run ",Object(r.b)("inlineCode",{parentName:"p"},"su openproject --login")," if you are the ",Object(r.b)("inlineCode",{parentName:"p"},"root")," user. If you are already the ",Object(r.b)("inlineCode",{parentName:"p"},"openproject")," user you can skip this command. Please be aware that the actual installation of a specific node version takes some time to finish."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[openproject@host] git clone https://github.com/OiNutter/nodenv.git ~/.nodenv\n[openproject@host] echo 'export PATH=\"$HOME/.nodenv/bin:$PATH\"' >> ~/.profile\n[openproject@host] echo 'eval \"$(nodenv init -)\"' >> ~/.profile\n[openproject@host] source ~/.profile\n[openproject@host] git clone git://github.com/OiNutter/node-build.git ~/.nodenv/plugins/node-build\n\n[openproject@host] nodenv install 8.12.0\n[openproject@host] nodenv rehash\n[openproject@host] nodenv global 8.12.0\n")),Object(r.b)("h3",{id:"63-check-node-version"},"6.3 Check ",Object(r.b)("inlineCode",{parentName:"h3"},"node")," version"),Object(r.b)("p",null,"To check our Node installation we run ",Object(r.b)("inlineCode",{parentName:"p"},"node --version"),". It should output something very similar to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"v8.12.0\n")),Object(r.b)("h2",{id:"7-installation-of-openproject"},"7. Installation of OpenProject"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[openproject@host] cd ~\n[openproject@host] git clone https://github.com/btey/openproject.git --branch master --depth 1\n[openproject@host] cd openproject\n# Ensure rubygems is up-to-date for bundler 2\n[openproject@host] gem update --system\n[openproject@host] gem install bundler\n# Replace mysql with postgresql if you had to install MySQL\n[openproject@host] bundle install --deployment --without mysql2 sqlite development test therubyracer docker\n[openproject@host] npm install\n")),Object(r.b)("h2",{id:"8-configure-openproject"},"8. Configure OpenProject"),Object(r.b)("p",null,"Create and configure the database configuration file in ",Object(r.b)("inlineCode",{parentName:"p"},"config/database.yml")," (relative to the openproject directory)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[openproject@host] cp config/database.yml.example config/database.yml\n")),Object(r.b)("p",null,"Now we edit the ",Object(r.b)("inlineCode",{parentName:"p"},"config/database.yml")," file and insert our database credentials for PostgreSQL. It should look like this (please keep in mind that you have to use the values you used above: user, database and password):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"production:\n  adapter: postgresql\n  encoding: unicode\n  database: openproject\n  pool: 5\n  username: openproject\n  password: openproject\n")),Object(r.b)("p",null,"Next we configure email notifications (this example uses a gmail account) by creating the ",Object(r.b)("inlineCode",{parentName:"p"},"configuration.yml")," in config directory."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[openproject@host] cp config/configuration.yml.example config/configuration.yml\n")),Object(r.b)("p",null,"Now we edit the ",Object(r.b)("inlineCode",{parentName:"p"},"configuration.yml")," file to suit our needs."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"production:                          #main level\n  email_delivery_method: :smtp       #settings for the production environment\n  smtp_address: smtp.gmail.com\n  smtp_port: 587\n  smtp_domain: smtp.gmail.com\n  smtp_user_name: ***@gmail.com\n  smtp_password: ****\n  smtp_enable_starttls_auto: true\n  smtp_authentication: plain\n")),Object(r.b)("p",null,"Add (or uncomment) this line into ",Object(r.b)("inlineCode",{parentName:"p"},"configuration.yml")," file at the end of the file for a better performance of OpenProject:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"rails_cache_store: :memcache\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE:")," You should validate your ",Object(r.b)("inlineCode",{parentName:"p"},"yml")," files, for example with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.yamllint.com/"}),"http://www.yamllint.com/"),". Both, the ",Object(r.b)("inlineCode",{parentName:"p"},"database.yml")," and ",Object(r.b)("inlineCode",{parentName:"p"},"configuration.yml")," file are sensitive to whitespace. It is pretty easy to write invalid ",Object(r.b)("inlineCode",{parentName:"p"},"yml")," files without seeing the error. Validating those files prevents you from such errors."),Object(r.b)("h2",{id:"9-finish-the-installation-of-openproject"},"9. Finish the installation of OpenProject"),Object(r.b)("h3",{id:"91-secret-token"},"9.1 Secret token"),Object(r.b)("p",null,"You need to generate a secret key base for the production environment with ",Object(r.b)("inlineCode",{parentName:"p"},"./bin/rake secret")," and make that available through the environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"SECRET_KEY_BASE"),". In this installation guide, we will use the local ",Object(r.b)("inlineCode",{parentName:"p"},".profile")," of the OpenProject user. You may alternatively set the environment variable in ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/environment")," or pass it to the server upon start manually in ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/apache2/envvars"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'[openproject@host] echo "export SECRET_KEY_BASE=$(./bin/rake secret)" >> ~/.profile\n[openproject@host] source ~/.profile\n')),Object(r.b)("h3",{id:"92-database-creation-and-assets-precompilation"},"9.2 Database creation and Assets precompilation"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'[openproject@host] cd ~/openproject\n[openproject@host] RAILS_ENV="production" ./bin/rake db:create\n[openproject@host] RAILS_ENV="production" ./bin/rake db:migrate\n[openproject@host] RAILS_ENV="production" ./bin/rake db:seed\n[openproject@host] RAILS_ENV="production" ./bin/rake assets:precompile\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE:")," When not specified differently, the default data loaded via db:seed will have an english localization. You can choose to seed in a different language by specifying the language via the ",Object(r.b)("inlineCode",{parentName:"p"},"LOCALE")," environment variable on the call to ",Object(r.b)("inlineCode",{parentName:"p"},"db:seed"),". E.g."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'[openproject@all] RAILS_ENV="production" LOCALE=fr ./bin/rake db:seed\n')),Object(r.b)("p",null,"will seed the database in the french language."),Object(r.b)("h2",{id:"10-serve-openproject-with-apache-and-passenger"},"10. Serve OpenProject with Apache and Passenger"),Object(r.b)("p",null,"Exit the current bash session with the openproject user, so that we are again in a root shell."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[openproject@ubuntu] exit\n")),Object(r.b)("p",null,"Prepare Apache and Passenger:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'[root@host] apt install -y apache2 libcurl4-gnutls-dev      \\\n                           apache2-dev libapr1-dev \\\n                           libaprutil1-dev\n[root@ubuntu] chmod o+x "/home/openproject"\n')),Object(r.b)("p",null,"The Passenger gem is installed and integrated into Apache:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[root@ubuntu] su openproject --login\n[openproject@ubuntu] cd ~/openproject\n[openproject@ubuntu] gem install passenger\n[openproject@ubuntu] passenger-install-apache2-module\n")),Object(r.b)("p",null,"If you are running on a Virtual Private Server, you need to make sure you have atleast 1GB of RAM before running the\xa0",Object(r.b)("inlineCode",{parentName:"p"},"passenger-install-apache2-module"),"."),Object(r.b)("p",null,"Follow the instructions passenger provides. The passenger installer will ask you the question in \u201cWhich languages are you interested in?\u201d. We are interested only in ruby."),Object(r.b)("p",null,"The passenger installer tells us to edit the Apache config files. To do this, continue as the root user:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[openproject@host] exit\n")),Object(r.b)("p",null,"Create the file ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/passenger.load")," and add the following line. But before copy & paste the following lines, check if the content (especially the version numbers!) is the same as the ",Object(r.b)("inlineCode",{parentName:"p"},"passenger-install-apache2-module")," installer said. When you\u2019re in doubt, do what passenger tells you."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-apacheconf"}),"LoadModule passenger_module /home/openproject/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/gems/passenger-6.0.7/buildout/apache2/mod_passenger.so\n")),Object(r.b)("p",null,"Create the file ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/passenger.conf")," with the following contents (again, take care of the version numbers!):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-apacheconf"}),"<IfModule mod_passenger.c>\n  PassengerRoot /home/openproject/.rbenv/versions/2.7.1/lib/ruby/gems/2.7.0/gems/passenger-6.0.7\n  PassengerDefaultRuby /home/openproject/.rbenv/versions/2.7.1/bin/ruby\n</IfModule>\n")),Object(r.b)("p",null,"Enable the new configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[root@openproject] a2enmod passenger\n")),Object(r.b)("p",null,"As the root user, create the file ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/apache2/sites-available/openproject.conf")," with the following contents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-apacheconf"}),"SetEnv EXECJS_RUNTIME Disabled\n\n<VirtualHost *:80>\n   ServerName yourdomain.com\n   # !!! Be sure to point DocumentRoot to 'public'!\n   DocumentRoot /home/openproject/openproject/public\n   <Directory /home/openproject/openproject/public>\n      # This relaxes Apache security settings.\n      AllowOverride all\n      # MultiViews must be turned off.\n      Options -MultiViews\n      # Uncomment this if you're on Apache >= 2.4:\n      Require all granted\n   </Directory>\n\n   # Request browser to cache assets\n   <Location /assets/>\n     ExpiresActive On ExpiresDefault \"access plus 1 year\"\n   </Location>\n\n</VirtualHost>\n")),Object(r.b)("p",null,"Enable the new openproject site (and disable the default site, if necessary):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[root@host] a2dissite 000-default\n[root@host] a2ensite openproject\n")),Object(r.b)("p",null,"Restart Apache:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[root@host] service apache2 restart\n")),Object(r.b)("p",null,"Your OpenProject installation should be accessible on port 80 (http). A default admin-account is created for you having the following credentials:"),Object(r.b)("p",null,"Username:\xa0",Object(r.b)("inlineCode",{parentName:"p"},"admin"),"\xa0Password:\xa0",Object(r.b)("inlineCode",{parentName:"p"},"admin")),Object(r.b)("p",null,"Please, change the password on the first login. Also, we highly recommend to configure the SSL module in Apache for https communication."),Object(r.b)("h2",{id:"11-activate-background-jobs"},"11. Activate background jobs"),Object(r.b)("p",null,"OpenProject sends (some) mails asynchronously by using background jobs. All such jobs are collected in a queue, so that a separate process can work on them. This means that we have to start the background worker. To automate this we can create some scripts."),Object(r.b)("h3",{id:"111-inbound-email"},"11.1 Inbound email"),Object(r.b)("p",null,"Create a shell script for ",Object(r.b)("strong",{parentName:"p"},"inbound")," emails (e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"/home/openproject/scripts/inbound_emails.sh"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash\nsource /home/openproject/.profile\ncd /home/openproject/openproject;\nRAILS_ENV=\"production\" ./bin/rake redmine:email:receive_imap host='' username='' password='' port='993' ssl=true ssl_verification=false folder='INBOX' move_on_success='INBOX/op-read' move_on_failure='INBOX/op-error' project=[project-name] allow_override=project unknown_user=accept no_permission_check=1\n")),Object(r.b)("h3",{id:"112-outbound-emails"},"11.2 Outbound emails"),Object(r.b)("p",null,"Create another shell script for outbound emails (e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"/home/openproject/scripts/outbound_emails.sh"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'#!/bin/bash\nsource /home/openproject/.profile\ncd /home/openproject/openproject;\nRAILS_ENV="production" ./bin/rake jobs:workoff\n')),Object(r.b)("h3",{id:"113-add-scripts-to-crontab"},"11.3 Add scripts to crontab"),Object(r.b)("p",null,"Put scripts for the background worker into a cronjob:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'[root@all] su - openproject -c "bash -l"\n[openproject@all] crontab -e\n')),Object(r.b)("p",null,"Add the following entries:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"*/1 * * * * /home/openproject/scripts/inbound_emails.sh >/dev/null 2>&1\n*/1 * * * * /home/openproject/scripts/outbound_emails.sh >/dev/null 2>&1\n")),Object(r.b)("p",null,"This will start the worker job every minute."),Object(r.b)("h2",{id:"12-troubleshooting"},"12. Troubleshooting"),Object(r.b)("p",null,"You can find the error logs for apache here:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"/var/log/apache2/error.log\n")),Object(r.b)("p",null,"The OpenProject logfile can be found here:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"/home/openproject/openproject/log/production.log\n")),Object(r.b)("p",null,"If an error occurs, it should be logged there."),Object(r.b)("p",null,"If you need to restart the server (for example after a configuration change), do:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"[openproject@all] touch ~/openproject/tmp/restart.txt\n")))}p.isMDXComponent=!0}}]);