/**
 * 首页文件 - 网站的主页面
 * 这个文件定义了网站首页的完整结构和内容
 * 使用 React 组件的方式构建页面
 */

// ==================== 导入依赖包 ====================
// 导入语句的作用：告诉 JavaScript 我们需要使用哪些外部代码

// clsx: 一个轻量级的工具库，用于智能地组合 CSS 类名
// 例如：clsx('button', 'button--primary', isActive && 'active')
// 会根据条件决定是否添加某个类名
import clsx from 'clsx';

// Link: Docusaurus 提供的特殊链接组件
// 与普通的 <a> 标签不同，它支持：
// 1. 客户端路由（页面切换更快，无需刷新）
// 2. 自动处理内部链接和外部链接
// 3. 与 Docusaurus 的路由系统集成
import Link from '@docusaurus/Link';

// useDocusaurusContext: 这是一个 React Hook（钩子函数）
// Hook 是 React 16.8+ 引入的特性，用于在函数组件中使用状态和生命周期
// 这个 Hook 可以获取网站的配置信息，如标题、标语、URL 等
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Layout: Docusaurus 提供的页面布局组件
// 它包含了网站的基本结构：
// - 导航栏（顶部菜单）
// - 页脚（底部信息）
// - 侧边栏（如果启用）
// - 页面的基本 HTML 结构
import Layout from '@theme/Layout';

// HomepageFeatures: 我们自己创建的组件
// 这个组件负责展示首页的特色内容（技术分享、生活感悟、学习笔记）
// 组件文件位置：src/components/HomepageFeatures/index.js
import HomepageFeatures from '@site/src/components/HomepageFeatures';

// Heading: Docusaurus 提供的语义化标题组件
// 与普通的 <h1>, <h2> 等标签相比，它提供了：
// - 更好的 SEO 优化
// - 自动生成目录
// - 更好的无障碍访问支持
import Heading from '@theme/Heading';

// styles: 导入当前页面的 CSS 模块样式
// CSS 模块是一种 CSS 作用域技术，可以避免样式冲突
// 文件位置：./index.module.css（与当前文件同目录）
import styles from './index.module.css';

// ==================== 首页头部组件 ====================

/**
 * HomepageHeader 组件
 * 
 * 作用：渲染首页的横幅区域（Hero Section）
 * 这是用户访问网站时首先看到的内容
 * 
 * 组件特点：
 * - 函数式组件：使用 function 关键字定义
 * - 无参数：不需要接收任何 props
 * - 返回 JSX：返回要渲染的 HTML 结构
 */
function HomepageHeader() {
  // ========== 获取网站配置信息 ==========
  // useDocusaurusContext() 是一个 React Hook
  // 它返回一个对象，包含网站的配置信息
  // 解构赋值：从返回的对象中提取 siteConfig 属性
  const {siteConfig} = useDocusaurusContext();
  
  // siteConfig 对象包含：
  // - title: 网站标题（来自 docusaurus.config.js）
  // - tagline: 网站标语
  // - url: 网站 URL
  // - baseUrl: 基础 URL
  
  // ========== 返回 JSX 结构 ==========
  // JSX 是 JavaScript XML 的缩写，是 React 的语法糖
  // 它让我们可以在 JavaScript 中写类似 HTML 的代码
  return (
    // <header> 是 HTML5 语义化标签，表示页面头部
    // className 属性用于设置 CSS 类名
    // clsx() 函数用于智能组合多个类名
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* 
        'hero hero--primary': Docusaurus 默认的横幅样式类
        - hero: 基础横幅样式
        - hero--primary: 主要横幅样式（通常是蓝色主题）
        
        styles.heroBanner: 我们自定义的样式类
        - 来自 index.module.css 文件
        - 可以覆盖或补充默认样式
      */}
      
      {/* 容器 div：限制内容宽度并居中显示 */}
      <div className="container">
        {/* 
          container 是 Bootstrap 的容器类
          作用：
          - 限制内容最大宽度
          - 在页面中居中显示
          - 提供响应式布局
        */}
        
        {/* 网站主标题 */}
        <Heading as="h1" className="hero__title">
          {/* 
            {siteConfig.title} 是 JavaScript 表达式
            大括号 {} 表示这里要执行 JavaScript 代码
            siteConfig.title 会从配置文件中读取网站标题
            例如：如果配置文件中 title: 'JXR\'s Blog'
            这里就会显示 "JXR's Blog"
          */}
          {siteConfig.title}
        </Heading>
        
        {/* 网站标语 */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* 
          siteConfig.tagline 同样来自配置文件
          例如：tagline: 'A blog about my life and experiences'
          这里会显示 "A blog about my life and experiences"
        */}
        
        {/* 按钮容器 */}
        <div className={styles.buttons}>
          {/* 
            styles.buttons 来自 CSS 模块
            用于设置按钮的布局样式（如居中、间距等）
          */}
          
          {/* 主要操作按钮 */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            快速了解我的个人情况 👤
          </Link>
          {/* 
            Link 组件属性说明：
            - className: CSS 类名
              * button: 基础按钮样式
              * button--secondary: 次要按钮样式（通常是灰色）
              * button--lg: 大尺寸按钮
            - to: 链接目标路径
              * "/docs/intro" 表示链接到文档的 intro 页面
              * 这是相对路径，会自动加上网站的 baseUrl
            
            按钮文本：快速了解我的个人情况 👤
            - 👤 是人物表情符号
            - 表示点击可以了解个人介绍信息
          */}
        </div>
      </div>
    </header>
  );
}

// ==================== 首页主组件 ====================

/**
 * Home 组件 - 首页的根组件
 * 
 * 作用：这是整个首页的入口组件，负责组合所有页面元素
 * 
 * 组件特点：
 * - 默认导出：使用 export default 导出，其他文件可以导入使用
 * - 函数式组件：使用 function 关键字定义
 * - 组合模式：将多个子组件组合成完整的页面
 * 
 * 页面结构：
 * 1. Layout 组件 - 提供页面基本结构（导航栏、页脚等）
 * 2. HomepageHeader 组件 - 首页横幅区域
 * 3. HomepageFeatures 组件 - 首页特色展示区域
 */
export default function Home() {
  // ========== 获取网站配置信息 ==========
  // 这里再次调用 useDocusaurusContext Hook
  // 虽然 HomepageHeader 组件中已经调用过，但每个组件都需要独立获取
  // 这是因为 React 的组件是独立的，数据不会自动共享
  const {siteConfig} = useDocusaurusContext();
  
  // ========== 返回完整的页面结构 ==========
  return (
    // Layout 组件：Docusaurus 的页面布局组件
    // 它提供了网站的基本结构，包括：
    // - 导航栏（顶部菜单）
    // - 页脚（底部信息）
    // - 侧边栏（如果启用）
    // - 页面的基本 HTML 结构（<html>, <head>, <body> 等）
    <Layout
      // title 属性：设置页面的标题
      // 这个标题会显示在浏览器的标签页上
      // 使用模板字符串：`Hello from ${siteConfig.title}`
      // 例如：如果 siteConfig.title 是 "JXR's Blog"
      // 那么页面标题就是 "Hello from JXR's Blog"
      title={`Hello from ${siteConfig.title}`}
      
      // description 属性：设置页面的描述
      // 这个描述会添加到页面的 <meta> 标签中
      // 用于 SEO（搜索引擎优化）和社交媒体分享
      // 当别人在搜索引擎中搜索时，可能会看到这个描述
      description="Description will go into a meta tag in <head />">
      
      {/* ========== 首页头部区域 ========== */}
      {/* 渲染 HomepageHeader 组件 */}
      <HomepageHeader />
      {/* 
        这里调用我们之前定义的 HomepageHeader 组件
        它会渲染：
        - 网站标题和标语
        - 主要操作按钮
        - 横幅区域的样式
      */}
      
      {/* ========== 首页主要内容区域 ========== */}
      {/* <main> 是 HTML5 语义化标签，表示页面的主要内容区域 */}
      <main>
        {/* 渲染 HomepageFeatures 组件 */}
        <HomepageFeatures />
        {/* 
          这里调用 HomepageFeatures 组件
          它会渲染：
          - 技术分享板块
          - 生活感悟板块  
          - 学习笔记板块
          - 每个板块都有图标、标题和描述
        */}
      </main>
      
      {/* 
        Layout 组件会自动添加：
        - 导航栏（包含网站标题、菜单链接等）
        - 页脚（包含版权信息、链接等）
        - 页面的基本 HTML 结构
      */}
    </Layout>
  );
}

// ==================== 文件结束 ====================
// 
// 这个文件定义了完整的首页结构：
// 1. 导入必要的依赖和组件
// 2. 定义 HomepageHeader 组件（横幅区域）
// 3. 定义 Home 组件（主页面）
// 4. 导出 Home 组件供 Docusaurus 使用
//
// 当用户访问网站首页时，Docusaurus 会自动调用这个 Home 组件
// 然后渲染出完整的首页内容
