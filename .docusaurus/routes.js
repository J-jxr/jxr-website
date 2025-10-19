import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/jxr-website/blog',
    component: ComponentCreator('/jxr-website/blog', 'af4'),
    exact: true
  },
  {
    path: '/jxr-website/blog/archive',
    component: ComponentCreator('/jxr-website/blog/archive', '063'),
    exact: true
  },
  {
    path: '/jxr-website/blog/authors',
    component: ComponentCreator('/jxr-website/blog/authors', '9ac'),
    exact: true
  },
  {
    path: '/jxr-website/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/jxr-website/blog/authors/all-sebastien-lorber-articles', 'f8d'),
    exact: true
  },
  {
    path: '/jxr-website/blog/authors/yangshun',
    component: ComponentCreator('/jxr-website/blog/authors/yangshun', '3a0'),
    exact: true
  },
  {
    path: '/jxr-website/blog/long-blog-post',
    component: ComponentCreator('/jxr-website/blog/long-blog-post', '5f3'),
    exact: true
  },
  {
    path: '/jxr-website/blog/mdx-blog-post',
    component: ComponentCreator('/jxr-website/blog/mdx-blog-post', '73a'),
    exact: true
  },
  {
    path: '/jxr-website/blog/tags',
    component: ComponentCreator('/jxr-website/blog/tags', '867'),
    exact: true
  },
  {
    path: '/jxr-website/blog/tags/docusaurus',
    component: ComponentCreator('/jxr-website/blog/tags/docusaurus', 'd80'),
    exact: true
  },
  {
    path: '/jxr-website/blog/tags/facebook',
    component: ComponentCreator('/jxr-website/blog/tags/facebook', 'd8c'),
    exact: true
  },
  {
    path: '/jxr-website/blog/tags/hello',
    component: ComponentCreator('/jxr-website/blog/tags/hello', '1c6'),
    exact: true
  },
  {
    path: '/jxr-website/blog/welcome',
    component: ComponentCreator('/jxr-website/blog/welcome', 'a99'),
    exact: true
  },
  {
    path: '/jxr-website/markdown-page',
    component: ComponentCreator('/jxr-website/markdown-page', '59e'),
    exact: true
  },
  {
    path: '/jxr-website/docs',
    component: ComponentCreator('/jxr-website/docs', 'd77'),
    routes: [
      {
        path: '/jxr-website/docs',
        component: ComponentCreator('/jxr-website/docs', '86c'),
        routes: [
          {
            path: '/jxr-website/docs',
            component: ComponentCreator('/jxr-website/docs', '04b'),
            routes: [
              {
                path: '/jxr-website/docs/intro',
                component: ComponentCreator('/jxr-website/docs/intro', '413'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/jxr-website/',
    component: ComponentCreator('/jxr-website/', '411'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
