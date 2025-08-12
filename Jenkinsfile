pipeline {
    agent { docker { image 'node:22.18.0-alpine3.22' } }
    environment {
        PATH = "/root/.nvm/versions/node/v20.12.2/bin:$PATH"
        TOKEN=credentials('anvelope-token')
        CLIENT_ID=credentials('anvelope-client-id')
    }
    stages {
        stage('Pull from GitHub') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Jericho-JERIX/Anvelope.git'
            }
        }
        stage('Build Production') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy Production') {
            steps {
                sh 'pm2 start npm --name "anvelope-prod" -- start'
            }
        }
    }
}
