pipeline {
  agent {
    docker 'node:8.11.4'
  }

  stages {
    stage('Build') {
      steps {
        sh 'env'
        sh 'yarn'
      }
    }
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'jenkins_scripts/build.sh'
      }
    }
    stage('dingTalk Notification') {
      steps {
        sh 'jenkins_scripts/dingTalk.sh deploy'
      }
    }
  }
}
