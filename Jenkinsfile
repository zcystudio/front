pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'ls -al'
        sh './jenkins_scripts/build.sh'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying'
        sh 'echo \'test\''
      }
    }
  }
}
