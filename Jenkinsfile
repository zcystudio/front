pipeline {
  agent any

    stages {
      stage('Build') {
        steps {
          echo 'Building..'
          sh jenkins_scripts/build.sh
        }
      }
      stage('Test') {
        steps {
          echo 'Testing..'
          yarn test
        }
      }
      stage('Deploy') {
        steps {
          echo 'Deploying....'
        }
      }
      stage('dingTalk Notification') {
        steps {
          sh jenkins_scripts/dingTalk.sh deploy
        }
      }
    }
}
