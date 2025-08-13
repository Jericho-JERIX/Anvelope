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
            git branch: 'dev'
            steps {
                input('Build Development')
                sh '''
                npm install
                npm run build
                '''
            }
        }
        stage('Build Production') {
            git branch: 'main'
            steps {
                input('Build Production')
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
