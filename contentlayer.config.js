import { defineDocumentType, makeSource, defineNestedType} from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.md`,
    contentType: 'markdown',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        date: {
            type: 'string',
            required: true,
        },
        image: {
            type: 'string'
        },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ""),
        },
    }
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
})