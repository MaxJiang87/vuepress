(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{388:function(a,t,s){"use strict";s.r(t);var v=s(45),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"开发规范深度测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发规范深度测试"}},[a._v("#")]),a._v(" 开发规范深度测试")]),a._v(" "),s("h2",{attrs:{id:"一、编程规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、编程规范"}},[a._v("#")]),a._v(" 一、编程规范")]),a._v(" "),s("h3",{attrs:{id:"_1、命名规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、命名规范"}},[a._v("#")]),a._v(" 1、命名规范")]),a._v(" "),s("h3",{attrs:{id:"_2、饭量大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、饭量大小"}},[a._v("#")]),a._v(" 2、饭量大小")]),a._v(" "),s("h3",{attrs:{id:"_3、做饭多少"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、做饭多少"}},[a._v("#")]),a._v(" 3、做饭多少")]),a._v(" "),s("ol",[s("li",[s("h4",{attrs:{id:"怎么看也是第四层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么看也是第四层"}},[a._v("#")]),a._v(" 怎么看也是第四层")])]),a._v(" "),s("li",[s("h4",{attrs:{id:"再看看是第几"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#再看看是第几"}},[a._v("#")]),a._v(" 再看看是第几")])])]),a._v(" "),s("ul",[s("li",[s("h5",{attrs:{id:"这里是第五层结构了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#这里是第五层结构了"}},[a._v("#")]),a._v(" 这里是第五层结构了")])]),a._v(" "),s("li",[s("h5",{attrs:{id:"哦吼"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哦吼"}},[a._v("#")]),a._v(" 哦吼")])]),a._v(" "),s("li",[s("h5",{attrs:{id:"啊哈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#啊哈"}},[a._v("#")]),a._v(" 啊哈")])])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("【强制】 代码中的命名均不能以下划线或美元符号开始，也不能以下划线或美元符号结束。")]),a._v(" "),s("ul",[s("li",[a._v("反例: _name / _"),s("em",[a._v("name / $Object / name")]),a._v(" / name$ / Object$")])])]),a._v(" "),s("li",[s("p",[a._v("【强制】 代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("说明:正确的英文拼写和语法可以让阅读者易于理解，避免歧义。注意，即使纯拼音命名方式 也要避免采用。")])]),a._v(" "),s("li",[s("p",[a._v("反例: DaZhePromotion [打折] / getPingfenByName() [评分] / int 某变量 = 3")])]),a._v(" "),s("li",[s("p",[a._v("正例: alibaba / taobao / youku / hangzhou 等国际通用的名称，可视同英文。")])])])]),a._v(" "),s("li",[s("p",[a._v("【强制】类名使用 UpperCamelCase 风格，必须遵从驼峰形式，但以下情形例外:(领域模型 的相关命名)DO / BO / DTO / VO等。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("正例:MarcoPolo / UserDO / XmlService / TcpUdpDeal / TaPromotion")])]),a._v(" "),s("li",[s("p",[a._v("反例:macroPolo / UserDo / XMLService / TCPUDPDeal / TAPromotion")])])])]),a._v(" "),s("li",[s("p",[a._v("【强制】方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风格，必须遵从 驼峰形式。")]),a._v(" "),s("ul",[s("li",[a._v("正例: localValue / getHttpMessage() / inputUserId")])])]),a._v(" "),s("li",[s("p",[a._v("【强制】常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("正例: MAX_STOCK_COUNT")])]),a._v(" "),s("li",[s("p",[a._v("反例: MAX_COUNT")])])])]),a._v(" "),s("li",[s("p",[a._v("【强制】抽象类命名使用 Abstract 或 Base 开头;异常类命名使用 Exception 结尾;测试类 命名以它要测试的类的名称开始，以 Test 结尾。")])]),a._v(" "),s("li",[s("p",[a._v("【强制】中括号是数组类型的一部分，数组定义如下:String[] args;")]),a._v(" "),s("ul",[s("li",[a._v("反例:使用String args[]的方式来定义。")])])]),a._v(" "),s("li",[s("p",[a._v("【强制】POJO 类中布尔类型的变量，都不要加 is，否则部分框架解析会引起序列化错误。")]),a._v(" "),s("ul",[s("li",[a._v("反例:定义为基本数据类型boolean isSuccess;的属性，它的方法也是isSuccess()，RPC 框架在反向解析的时候，“以为”对应的属性名称是 success，导致属性获取不到，进而抛出异 常。")])])]),a._v(" "),s("li",[s("p",[a._v("【强制】包名统一使用小写，点分隔符之间有且仅有一个自然语义的英语单词。包名统一使用 单数形式，但是类名如果有复数含义，类名可以使用复数形式。")]),a._v(" "),s("ul",[s("li",[a._v("正例: 应用工具类包名为com.alibaba.open.util、类名为MessageUtils(此规则参考 spring 的框架结构)")])])]),a._v(" "),s("li",[s("p",[a._v("【强制】杜绝完全不规范的缩写，避免望文不知义。\n反例: AbstractClass“缩写”命名成 AbsClass;condition“缩写”命名成 condi，此类 随意缩写严重降低了代码的可阅读性。")])]),a._v(" "),s("li",[s("p",[a._v("【推荐】如果使用到了设计模式，建议在类名中体现出具体模式。 说明:将设计模式体现在名字中，有利于阅读者快速理解架构设计思想。")]),a._v(" "),s("ul",[s("li",[a._v("正例: public class OrderFactory;\npublic class LoginProxy;\npublic class ResourceObserver;")])])]),a._v(" "),s("li",[s("p",[a._v("【推荐】接口类中的方法和属性不要加任何修饰符号(public 也不要加)，保持代码的简洁 性，并加上有效的 Javadoc 注释。尽量不要在接口里定义变量，如果一定要定义变量，肯定是 与接口方法相关，并且是整个应用的基础常量。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v('正例:接口方法签名:void f();接口基础常量表示:String COMPANY = "alibaba"')])]),a._v(" "),s("li",[s("p",[a._v("反例:接口方法定义:public abstract void f();")])]),a._v(" "),s("li",[s("p",[a._v("说明:JDK8 中接口允许有默认实现，那么这个 default 方法，是对所有实现类都有价值的默 认实现。")])])])]),a._v(" "),s("li",[s("p",[a._v("接口和实现类的命名有两套规则:")]),a._v(" "),s("p",[a._v("【强制】对于 Service 和 DAO 类，基于 SOA 的理念，暴露出来的服务一定是接口，内部\n的实现类用 Impl 的后缀与接口区别。")]),a._v(" "),s("ul",[s("li",[a._v("正例:CacheServiceImpl 实现 CacheService 接口。")])]),a._v(" "),s("p",[a._v("【推荐】 如果是形容能力的接口名称，取对应的形容词做接口名(通常是–able 的形式)。")]),a._v(" "),s("ul",[s("li",[a._v("正例:AbstractTranslator 实现 Translatable。")])])]),a._v(" "),s("li",[s("p",[a._v("【参考】枚举类名建议带上 Enum 后缀，枚举成员名称需要全大写，单词间用下划线隔开。")]),a._v(" "),s("ul",[s("li",[a._v("说明:枚举其实就是特殊的常量类，且构造方法被默认强制是私有。")]),a._v(" "),s("li",[a._v("正例:枚举名字:DealStatusEnum，成员名称:SUCCESS / UNKOWN_REASON。")])])]),a._v(" "),s("li",[s("p",[a._v("【参考】各层命名规约:")]),a._v(" "),s("p",[a._v("A) Service/DAO层方法命名规约")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("1) 获取单个对象的方法用get做前缀。\n2) 获取多个对象的方法用list做前缀。\n3) 获取统计值的方法用count做前缀。\n4) 插入的方法用save(推荐)或insert做前缀。 \n5) 删除的方法用remove(推荐)或delete做前缀。 \n6) 修改的方法用update做前缀。\n")])])]),s("p",[a._v("B) 领域模型命名规约")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("1) 数据对象:xxxDO，xxx即为数据表名。\n2) 数据传输对象:xxxDTO，xxx为业务领域相关的名称。 \n3) 展示对象:xxxVO，xxx一般为网页名称。\n4) POJO是DO/DTO/BO/VO的统称，禁止命名成xxxPOJO\n")])])])])]),a._v(" "),s("h4",{attrs:{id:"第四层了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四层了"}},[a._v("#")]),a._v(" 第四层了")]),a._v(" "),s("h5",{attrs:{id:"第五层了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五层了"}},[a._v("#")]),a._v(" 第五层了")]),a._v(" "),s("h2",{attrs:{id:"二、培训规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、培训规范"}},[a._v("#")]),a._v(" 二、培训规范")]),a._v(" "),s("h2",{attrs:{id:"三、使用规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、使用规范"}},[a._v("#")]),a._v(" 三、使用规范")])])}),[],!1,null,null,null);t.default=_.exports}}]);