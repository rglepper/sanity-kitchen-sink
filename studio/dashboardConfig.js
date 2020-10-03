export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7851cab714641e47cbc596',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-p7v8ad6e',
                  apiId: '347cbbfc-6369-4ace-8dfc-59e4c32b3113'
                },
                {
                  buildHookId: '5f7851cab4d768471277abe1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wjp4qu38',
                  apiId: '54e87ec1-5383-4be2-b359-083c6c0cfbb2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rglepper/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wjp4qu38.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
