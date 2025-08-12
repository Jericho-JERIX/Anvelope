pipeline {
    agent { docker { image 'node:22.18.0-alpine3.22' } }
    environment {
        TOKEN=credentials('anvelope-token')
        CLIENT_ID=credentials('anvelope-client-id')
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
                sh 'sudo ln -s /root/.nvm/versions/node/v20.12.2/bin/pm2 /var/lib/jenkins/'
                sh 'pm2 start npm --name "anvelope-prod" -- start'
            }
        }
    }
}
