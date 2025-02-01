export const faceSnapPath = {
    resourcesPath: () => 'facesnaps',
    resourcePath: (id: string) => `${ faceSnapPath.resourcesPath() }/${ id }`,
    newResourcePath: () => `${ faceSnapPath.resourcesPath() }/create`,
};