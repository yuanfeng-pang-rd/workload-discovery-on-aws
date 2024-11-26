import {MockAgent} from 'undici';

const agent = new MockAgent();
agent.disableNetConnect();

const client = agent.get('https://www.workload-discovery');

client.intercept({
    path: '/graphql',
    method: 'POST'
})
    .reply(200, {data: {
            getAccounts: []
        }}).persist();

export default agent;
