import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class NoOpNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Dummy node',
		name: 'dummyNode',
		icon: 'file:forbidden.svg',
		group: ['transform'],
		version: 1,
		description: 'A no-operation node for package compatibility.',
		defaults: {
			name: 'No-Op',
			color: '#772244',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [],
	};
}
