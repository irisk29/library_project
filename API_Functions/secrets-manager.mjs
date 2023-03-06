import AWS from 'aws-sdk';

const secretsManager = new AWS.SecretsManager();

export async function getSecretValue(secretName) {
  const data = await secretsManager.getSecretValue({ SecretId: secretName }).promise();
  return data.SecretString;
}