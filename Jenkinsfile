pipeline {
    agent { docker { image 'node:22.18.0-alpine3.22' } }
    environment {
        TOKEN=credentials('token')
        CLIENT_ID=credentials('client-id')
    }
    stages {
        stage('Build Production') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy Production') {
            steps {
                sh 'npm start'
            }
        }
    }
}
