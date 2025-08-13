pipeline {
    agent any
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
        stage('Build Production') {
            steps {
                sh '''
                docker build -t anvelope-prod:latest .
                '''
            }
        }
        stage('Deploy Production') {
            steps {
                sh '''
                docker stop anvelope_prod_container || true && docker rm anvelope_prod_container || true
                docker run -d --name anvelope_prod_container -p 8007:3000 anvelope-prod:latest
                '''
            }
        }
    }
}
