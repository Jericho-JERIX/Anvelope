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
                echo $TOKEN
                echo $CLIENT_ID
                echo $(env)
                '''
            }
        }
        stage('Build Production') {
            steps {
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
