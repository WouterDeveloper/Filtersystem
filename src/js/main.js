// Libraries
import Vue from 'vue';

// Scripts

export default function app() {
  Vue.config.devtools = true;

  Vue.component('job-view', {
    data() {
      return { availableJobs: 3 };
    },
  });
  Vue.component('job-list', {
    template: `
      <div>
        <job v-for="job in jobs"> {{ job.name }} </job> 
      </div> 
    `,
    data() {
      return {
        jobs: [
          { name: 'Frontend Developer', locatie: 'Maastricht', salaris: '3400' },
          { name: 'Designer', locatie: 'Sittard', salaris: '3100' },
          { name: 'Backend Developer', locatie: 'Roermond', salaris: '3400' },
        ],
      };
    },
  });
  Vue.component('job', {
    template: '<li><slot></slot></li>',
  });

// eslint-disable-next-line
  new Vue({          
      el: '#app',
      data: {

        return() {
        },
      },
  });
}
