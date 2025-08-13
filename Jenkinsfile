pipeline {
    agent { docker { image 'node:22.18.0-alpine3.22' } }
    environment {
        TOKEN=credentials('anvelope-token')
        CLIENT_ID=credentials('anvelope-client-id')
    }
    stages {
        stage('Setup Environment') {
            steps {
                sh '''
                echo TOKEN=$TOKEN >> .env
                echo CLIENT_ID=$CLIENT_ID >> .env
                '''
            }
        }
        stage ('Build Development') {
            steps {
                input message: 'Approve deployment to Development?'
                git branch: 'dev', url: 'https://github.com/Jericho-JERIX/Anvelope.git'
                sh '''
                npm install
                npm run build
                '''
            }
        }
        stage('Build Production') {
            steps {
                input message: 'Approve deployment to Production?'
                git branch: 'dev', url: 'https://github.com/Jericho-JERIX/Anvelope.git'
                sh '''
                npm install
                npm run build
                '''
            }
        }
        stage('Deploy Production') {
            steps {
                sh '''
                echo "Deploying ..."
                '''
            }
        }
    }
}
