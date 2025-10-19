// 导入必要的依赖包和组件
// clsx: 用于条件性地组合 CSS 类名的工具库
import clsx from 'clsx';
// Heading: Docusaurus 提供的语义化标题组件
import Heading from '@theme/Heading';
// styles: 导入当前组件的 CSS 模块样式文件
import styles from './styles.module.css';

/**
 * 个人博客特色展示数据
 * 展示博客的主要特色和内容方向
 * 每个特色包含：标题、图标、描述文本
 */
const FeatureList = [
  {
    // 特色标题
    title: '技术分享',
    // SVG 图标组件：使用 require 动态导入 SVG 文件
    // .default 是因为 SVG 文件被当作 ES6 模块导入
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    // 特色描述：使用 JSX Fragment (<>...</>) 包装多行内容
    description: (
      <>
        分享编程经验、技术心得和项目实践。
        从基础概念到高级应用，记录学习路上的点点滴滴。
      </>
    ),
  },
  {
    title: '生活感悟',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        记录生活中的美好瞬间和思考感悟。
        在忙碌的代码世界中，寻找生活的诗意与远方。
      </>
    ),
  },
  {
    title: '学习笔记',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        整理学习笔记，沉淀知识体系。
        从零基础到进阶，与你一起成长进步。
      </>
    ),
  },
];

/**
 * 博客特色卡片组件
 * 用于展示个人博客的各个特色板块
 * 使用解构赋值从 props 中提取需要的属性
 * 
 * @param {Object} props - 组件属性
 * @param {React.Component} props.Svg - SVG 图标组件
 * @param {string} props.title - 特色标题
 * @param {React.ReactNode} props.description - 特色描述内容
 */
function Feature({Svg, title, description}) {
  return (
    // 使用 Bootstrap 网格系统：col col--4 表示占 4/12 列（即 1/3 宽度）
    <div className={clsx('col col--4')}>
      {/* 图标容器：使用 text--center 类实现居中对齐 */}
      <div className="text--center">
        {/* SVG 图标组件：role="img" 提供无障碍访问支持 */}
        <Svg className={styles.featureSvg} role="img" />
      </div>
      {/* 内容容器：包含标题和描述 */}
      <div className="text--center padding-horiz--md">
        {/* 特色标题：使用 Heading 组件渲染为 h3 标签 */}
        <Heading as="h3">{title}</Heading>
        {/* 特色描述：直接渲染 JSX 内容 */}
        <p>{description}</p>
      </div>
    </div>
  );
}

/**
 * 个人博客特色展示组件
 * 展示博客的主要内容方向和特色
 * 使用网格布局展示三个主要板块
 */
export default function HomepageFeatures() {
  return (
    // section 元素：HTML5 语义化标签，表示页面中的一个独立区域
    <section className={styles.features}>
      {/* 容器：限制内容宽度并居中显示 */}
      <div className="container">
        {/* 行容器：Bootstrap 网格系统的行 */}
        <div className="row">
          {/* 使用 map 方法遍历特色列表，渲染每个特色组件 */}
          {/* key={idx}: React 要求列表渲染时提供唯一的 key 属性 */}
          {/* {...props}: 使用展开运算符将对象的所有属性作为 props 传递 */}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
