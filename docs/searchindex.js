Search.setIndex({docnames:["api_reference/graph_transpiler/base_classes","api_reference/graph_transpiler/index","api_reference/graph_transpiler/operators","api_reference/graph_transpiler/optimize_rules","api_reference/graph_transpiler/variables","api_reference/index","index","tips/es5","tips/index","tips/safari_webcam","tutorial/caffe","tutorial/chainer","tutorial/index","tutorial/introduction","tutorial/setup"],envversion:51,filenames:["api_reference/graph_transpiler/base_classes.md","api_reference/graph_transpiler/index.md","api_reference/graph_transpiler/operators.md","api_reference/graph_transpiler/optimize_rules.md","api_reference/graph_transpiler/variables.md","api_reference/index.md","index.md","tips/es5.md","tips/index.md","tips/safari_webcam.md","tutorial/caffe.md","tutorial/chainer.md","tutorial/index.md","tutorial/introduction.md","tutorial/setup.md"],objects:{"webdnn.graph.attribute":{Attribute:[0,0,1,""]},"webdnn.graph.axis":{Axis:[0,0,1,""]},"webdnn.graph.graph":{Graph:[0,0,1,""]},"webdnn.graph.operator":{Operator:[0,0,1,""]},"webdnn.graph.operator.Operator":{append_input:[0,1,1,""],append_output:[0,1,1,""],remove_all:[0,1,1,""],remove_input:[0,1,1,""],remove_output:[0,1,1,""],replace:[0,1,1,""],replace_input:[0,1,1,""],replace_output:[0,1,1,""]},"webdnn.graph.operators.average_pooling_2d":{AveragePooling2D:[2,0,1,""]},"webdnn.graph.operators.average_pooling_2d.AveragePooling2D":{__call__:[2,1,1,""]},"webdnn.graph.operators.axiswise_bias":{AxiswiseBias:[2,0,1,""]},"webdnn.graph.operators.axiswise_bias.AxiswiseBias":{__call__:[2,1,1,""]},"webdnn.graph.operators.axiswise_scale":{AxiswiseScale:[2,0,1,""]},"webdnn.graph.operators.axiswise_scale.AxiswiseScale":{__call__:[2,1,1,""]},"webdnn.graph.operators.concat":{Concat:[2,0,1,""]},"webdnn.graph.operators.concat.Concat":{__call__:[2,1,1,""]},"webdnn.graph.operators.convolution2d":{Convolution2D:[2,0,1,""]},"webdnn.graph.operators.convolution2d.Convolution2D":{__call__:[2,1,1,""]},"webdnn.graph.operators.deconvolution2d":{Deconvolution2D:[2,0,1,""]},"webdnn.graph.operators.deconvolution2d.Deconvolution2D":{__call__:[2,1,1,""]},"webdnn.graph.operators.elementwise_sum":{ElementwiseSum:[2,0,1,""]},"webdnn.graph.operators.elementwise_sum.ElementwiseSum":{__call__:[2,1,1,""]},"webdnn.graph.operators.elu":{Elu:[2,0,1,""]},"webdnn.graph.operators.elu.Elu":{__call__:[2,1,1,""]},"webdnn.graph.operators.flatten":{Flatten:[2,0,1,""]},"webdnn.graph.operators.flatten.Flatten":{__call__:[2,1,1,""]},"webdnn.graph.operators.linear":{Linear:[2,0,1,""]},"webdnn.graph.operators.linear.Linear":{__call__:[2,1,1,""]},"webdnn.graph.operators.local_response_normalization":{LocalResponseNormalization:[2,0,1,""]},"webdnn.graph.operators.local_response_normalization.LocalResponseNormalization":{__call__:[2,1,1,""]},"webdnn.graph.operators.max_pooling_2d":{MaxPooling2D:[2,0,1,""]},"webdnn.graph.operators.max_pooling_2d.MaxPooling2D":{__call__:[2,1,1,""]},"webdnn.graph.operators.relu":{Relu:[2,0,1,""]},"webdnn.graph.operators.relu.Relu":{__call__:[2,1,1,""]},"webdnn.graph.operators.scalar_affine":{ScalarAffine:[2,0,1,""]},"webdnn.graph.operators.sigmoid":{Sigmoid:[2,0,1,""]},"webdnn.graph.operators.sigmoid.Sigmoid":{__call__:[2,1,1,""]},"webdnn.graph.operators.softmax":{Softmax:[2,0,1,""]},"webdnn.graph.operators.softmax.Softmax":{__call__:[2,1,1,""]},"webdnn.graph.operators.tanh":{Tanh:[2,0,1,""]},"webdnn.graph.operators.tanh.Tanh":{__call__:[2,1,1,""]},"webdnn.graph.optimize_rule":{OptimizeRule:[0,0,1,""]},"webdnn.graph.optimize_rule.OptimizeRule":{optimize:[0,1,1,""]},"webdnn.graph.order":{Order:[0,0,1,""]},"webdnn.graph.variable":{Variable:[0,0,1,""]},"webdnn.graph.variables.constant_variable":{ConstantVariable:[4,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"]},objtypes:{"0":"py:class","1":"py:method"},terms:{"2\u8981\u7d20\u306e\u30bf\u30d7\u30eb":0,"4byte":0,"64bit":14,"67e894c6cd8f":14,"\u305d\u306e\u9806\u5e8f\u306fattribut":0,"\u306b\u4f9d\u5b58":0,"\u3092\u60f3\u5b9a\u3057\u3066\u3044\u308b":0,"\u30ec\u30a4\u30e4\u30fc\u9593\u3067\u53d7\u3051\u6e21\u3055\u308c\u308b\u5909\u6570":0,"\u5165\u529b\u5909\u6570\u3092\u7f6e\u304d\u63db\u3048\u308b":0,"\u5165\u529b\u5909\u6570\u3092\u89e3\u9664\u3059\u308b":0,"\u5165\u529b\u5909\u6570\u3092\u8ffd\u52a0\u3059\u308b":0,"\u5168\u3066\u306e\u5909\u6570\u306e\u63a5\u7d9a\u3092\u89e3\u9664\u3059\u308b":0,"\u51fa\u529b\u5909\u6570\u3092\u7f6e\u304d\u63db\u3048\u308b":0,"\u51fa\u529b\u5909\u6570\u3092\u89e3\u9664\u3059\u308b":0,"\u51fa\u529b\u5909\u6570\u3092\u8ffd\u52a0\u3059\u308b":0,"\u53c2\u8003":[],"\u540d\u524d\u3067\u8b58\u5225\u3055\u308c\u308b":0,"\u6700\u521d\u306e\u8aac\u660e":[],"\u6f14\u7b97\u3092\u7f6e\u304d\u63db\u3048\u308b":0,"\u73fe\u5728\u306e\u3068\u3053\u308d":0,"\u7b2c\u4e00\u8981\u7d20\u306f\u5909\u63db\u5f8c\u306egraph":0,"\u7b2c\u4e8c\u8981\u7d20\u306f\u5909\u63db\u304c\u3042\u3063\u305f\u304b\u3069\u3046\u304b\u306ebool\u5024":0,"case":[2,7,9],"chainer\u306e\u5834\u5408":[],"class":[1,2,4,5],"default":7,"export":14,"float":2,"float32\u578b":0,"function":4,"graph\u3092\u5909\u63db\u3059\u308b":0,"import":[11,13],"int":[0,2],"return":[0,2,10],"shape\u306flist":0,"try":14,"var":0,One:13,That:10,The:[2,13],Then:10,There:[9,13],These:13,Use:[6,8,12],Using:[6,8],__call__:2,_forwardref:2,about:10,abs:2,acceler:13,access:9,achiev:13,activ:[2,14],add:2,added:2,addit:13,adob:9,after:2,aggress:13,ajax:7,all:10,allow:9,along:[2,14],alpha:2,alreadi:13,also:[7,14],ani:13,anoth:13,api:[6,13],append_input:0,append_output:0,appl:14,appli:13,applic:[10,13],argmax:10,arrai:4,arxiv:2,asm:14,attent:13,attract:13,attribut:1,automat:[7,10,14],averag:2,average_pooling_2d:2,averagepooling2d:1,await:[7,10],axes:[0,2],axi:[1,2],axiswise_bia:2,axiswise_scal:2,axiswisebia:1,axiswisescal:1,babel:7,backend:[10,11,14],backendnam:10,background:8,base:[1,5,10],berkeleyvis:2,best:10,beta:2,bia:2,binari:13,binaryen:14,bitbucket:14,bool:0,bring:13,browser:[7,9,12,13,14],build:7,builder:[5,6],built:4,button:9,bz2:14,caff:[2,13,14],caffemodel:[6,12],caffenet:10,calcul:2,camera:[6,8],can:[7,10,13,14],cannot:13,capac:13,cdn:7,cdnj:7,chainer:[6,12,13,14],chainergraphconvert:11,chang:9,check:10,classif:11,classifi:10,cli:7,click:9,clone:14,cloud:13,cloudflar:7,code:[8,10,12,13],colus:7,com:[7,9,14],combin:2,command:14,compat:7,compil:[7,10,14],complet:[10,13],compliant:7,comput:[10,11,13],computation:13,concat:1,concaten:2,confer:11,configur:9,congratul:10,connect:2,consist:13,consol:10,constant_vari:4,constantvari:1,construct:11,convers:10,convert:[8,11,12,13,14],convert_caff:10,convert_from_inout_var:11,convolution2d:1,cost:13,cplus_include_path:14,cpu:13,current:14,cvpr:11,data:[4,10,11,13],deconvolution2d:1,deep:[11,13],defin:11,describ:[7,9,10,13],descriptor:[5,10,13],descriptor_runn:7,descriptorrunn:10,design:13,develop:[13,14],devic:13,dialog:9,differ:[9,13],difficulti:13,dimens:2,directori:[7,13],displai:13,dnn:13,doc:[3,11],document:[6,7,9],doe:[7,9,14],don:14,download:12,dtype:11,dummi:11,each:13,easi:9,easili:13,ecmascript5:[6,8],edit:13,eigen:12,element:0,elementwis:2,elementwise_sum:2,elementwisesum:1,elu:1,empti:11,emscripten:12,emsdk:14,emsdk_env:14,enabl:[9,14],encount:13,end:13,enumer:0,env:7,environ:[12,13],es2015:7,es5:8,etc:0,exampl:[10,13],exec_info:11,execut:[11,13],expens:13,familiar:13,fastest:14,fc6:11,featur:[7,13],fetch:7,few:13,field:13,file:[7,10,13],filter:2,find:13,first:[2,9,10],fixm:3,flash:8,flatten:1,float32:11,float32arrai:10,focus:13,follow:[7,13],foo:7,format:[11,13],framework:[6,12,14],free:12,from:[9,11,13,14],full:13,fulli:2,game:13,gener:[2,10,11,13,14],generate_descriptor:11,get:[10,14],git:14,github:[6,14],give:14,good:9,gpu:13,graph:[2,4,5,6,11,13],graph_transpil:2,graphdescriptor:12,graphic:13,guid:[6,12],har:13,hardwar:13,have:[7,9,10,13,14],help:[13,14],helpx:9,highli:13,how:[7,9,10,13],howev:[9,13],html:[2,7,9,10,11],http:[2,7,9,11,14],ie11:7,ieee:11,imag:[10,11,13],imagenet:10,implement:13,in_ax:2,includ:14,incom:14,incur:13,infer:12,inflat:7,inform:11,initi:10,inod:0,input:[0,2,10,13],inputview:10,insert:7,instal:[7,9,12],instead:7,instruct:9,interfac:[0,11,12],interpret:13,intortupl:2,introduct:[6,12],ipynb:10,iter:0,its:13,ivari:0,javascript:[7,13],juj:14,jupyt:10,jxf:14,kei:13,kera:13,kernel:2,ksize:2,label:10,labelid:10,languag:13,laptop:13,latest:11,layer:[2,11],learn:[10,11],least:11,let:10,level:7,lib:7,librari:[7,9,13,14],like:7,linear:1,link:11,list:[0,2],load:[7,10,11],loadimagedata:10,local:2,local_response_norm:2,localresponsenorm:1,log:10,look:10,lot:13,lrn:2,lucki:9,mac:9,maco:14,mai:14,major:13,make:9,master:14,math:10,max:2,max_pooling_2d:2,maxpooling2d:1,mic:9,microphon:9,mil:14,min:7,model:[6,10,12,13,14],modern:[9,13,14],modul:13,most:[9,14],multipl:2,multipli:2,name:[0,2],nativ:13,natur:13,need:[7,9,11,13,14],network:13,neural:13,new_op:0,newer:7,next:[10,13],node:0,non:12,nonetyp:2,normal:2,note:12,notebook:10,npm:7,number:13,numpi:11,obj:2,object:7,offici:9,offlin:[10,13],older:7,onc:[10,11],one:2,onli:[9,10,13,14],onlin:13,open:9,oper:[1,5],optim:[0,1,5,12],optimize_rul:0,optimizerul:1,order:[1,4],ordernc:0,org:[2,11,14],our:11,out:[7,13],out_ax:2,out_axi:2,output:[0,2,10,11,13],outputview:10,overhead:12,own:8,packag:12,pad:2,page:[9,10,13],param:0,paramet:2,pattern:11,perform:[13,14],permiss:9,phase:12,pip:14,pipelin:13,player:8,pleas:2,plugin:7,polyfil:8,pool:2,possibl:13,practic:13,predict:10,prefer:9,prepareal:10,preset:7,pretrain:11,preview:14,problem:13,process:13,product:13,program:13,promis:7,provid:13,purpos:13,pwd:14,pyenv:14,python2:14,python3:14,python:[12,13],recent:13,recognit:[11,13],refer:[6,10,11],regener:7,relu:1,remove_al:0,remove_input:0,remove_output:0,ren:11,replac:0,replace_input:0,replace_output:0,requir:[13,14],residu:11,resnet50:11,resnet50lay:11,resnet:11,respons:2,rule:[1,5],run:[11,12,13,14],runner:[5,10,13],safari:[6,8,14],same:[2,13],save:11,scalar_affin:2,scalaraffin:1,scale:2,script:[7,9],sdk:14,second:2,section:[10,14],secur:8,see:[2,10,14],select:10,server:10,set:[2,8,10,13],setup:[6,12,13],sever:13,shape:0,sheepdog:10,shell:14,shetland:10,should:2,show:10,sigmoid:1,similar:14,site:9,size:2,skip:14,smartphon:13,softmax:1,solut:13,some:[2,7],sometim:9,sourc:[0,2,4,14],special:[9,12],specifi:2,speedi:13,speedier:13,src:7,standard:[7,13],start:14,statement:7,step:13,sterategi:13,str:[0,2],stride:2,structur:[6,12],suitabl:13,sum:2,sun:11,suppli:[7,13],support:[6,8,9,13,14],syntax:7,system:9,tab:9,tanh:1,tar:14,target:[2,9],technolog:14,test:14,thei:13,them:13,therefor:[11,13],thi:[2,6,7,9,10,11,13,14],tip:6,tokyo:14,train:13,transform:7,transpil:13,tsc:7,tsconfig:7,tupl:[0,2],tutori:[2,6,11],two:13,type:[0,2,10,14],union:2,use:[2,7,9,13],used:[13,14],user:13,uses:[7,13],using:13,usual:13,v_new:0,v_old:0,valu:2,variabl:[1,2,5,10,11],variou:13,vector:10,veri:13,version:[2,13],video:13,view:10,vision:11,visit:9,want:[7,9,14],web:[6,8,12,13],webassembl:[13,14],webcamj:9,webdnn:[0,2,4,8,10,11,12,14],webgl:13,webgpu:[11,12,13],webrtc:9,websit:9,weight:[2,13],well:10,wget:14,when:9,which:[2,7,9,13,14],window:7,wip:[],without:13,work:[9,10],workaround:9,wrap:9,you:[2,7,9,10,13,14],your:[8,9,10],zhang:11},titles:["Base Classes","Graph Builder","Operators","Optimize Rules","Variables","API Reference","MIL WebDNN","EcmaScript5 support","Tips","Using web camera in Safari","Use with Caffemodel","Use with Chainer Model","Tutorial","Introduction to WebDNN","Setup Guide"],titleterms:{"class":0,Use:[7,10,11],Using:9,api:5,attribut:0,averagepooling2d:2,axi:0,axiswisebia:2,axiswisescal:2,background:9,base:0,browser:10,builder:1,caffemodel:10,camera:9,chainer:11,code:[7,14],concat:2,constantvari:4,content:6,convert:[7,10],convolution2d:2,deconvolution2d:2,download:14,ecmascript5:7,eigen:14,elementwisesum:2,elu:2,emscripten:14,environ:14,es5:7,flash:9,flatten:2,framework:13,free:13,graph:[0,1],graphdescriptor:10,guid:14,infer:13,instal:[13,14],interfac:13,introduct:13,linear:2,localresponsenorm:2,maxpooling2d:2,mil:6,model:11,non:13,note:14,oper:[0,2],optim:[3,13],optimizerul:0,order:0,overhead:13,own:7,packag:14,phase:13,player:9,polyfil:7,python:14,refer:5,relu:2,rule:3,run:10,safari:9,scalaraffin:2,secur:9,set:9,setup:14,sigmoid:2,softmax:2,special:13,structur:13,support:7,tanh:2,tip:8,tutori:12,variabl:[0,4],web:[9,10],webdnn:[6,7,13],webgpu:14,your:7}})