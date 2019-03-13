#!/usr/bin/groovy


def remote = [:]
remote.name = 'fdev'
remote.host = '172.16.0.16'
remote.user = 'ubuntu'
remote.allowAnyHosts = true
remote.password = 'ustc117zcy!'

pipeline {
  agent {
    node {
      label 'master'
    }
  }
  stages {
    stage('Ping Remote') {
      steps {
        sshCommand remote: remote, command: 'ls -al'
      }
    }
    stage('Build') {
      steps {
        sh 'ls -al'
          sh 'jenkins_scripts/build.sh'
      }
    }
    stage('Deploy') {
      steps {
        sshCommand remote: remote, command: 'ls -al build'
        sshPut remote: remote, from: 'front.tar', into: 'build/'
        sshCommand remote: remote, command: 'ls -al build'
        sshCommand remote: remote, command: './deploy.sh'
      }
    }
    stage('dingTalk Notification') {
      steps {
        sh 'jenkins_scripts/dingTalk.sh deploy'
      }
    }
  }
}
