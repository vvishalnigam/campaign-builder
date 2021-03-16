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
                  buildHookId: '60507f9c332d778d6092f20e',
                  title: 'Sanity Studio',
                  name: 'campaign-builder-studio',
                  apiId: '9e769e71-0a5a-43b7-bbba-ead2571b98af'
                },
                {
                  buildHookId: '60507f9c4323568c729e401e',
                  title: 'Blog Website',
                  name: 'campaign-builder',
                  apiId: '746974ce-95eb-422a-9af2-70d048406d24'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vvishalnigam/campaign-builder',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://campaign-builder.netlify.app', category: 'apps'}
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
