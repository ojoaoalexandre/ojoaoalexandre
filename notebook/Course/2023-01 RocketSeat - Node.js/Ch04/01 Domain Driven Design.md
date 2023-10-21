#ddd

## Value Objects
Existem entidades que possuem campos com regras de negócios próprias e elaboradas, como no caso de campos que possuem `slug`.

```typescript
// domains/entities/value-objects/Slug.ts

export class Slug {
	public value: string

	constructor(value: string) {
		this.value = value
	}

	static createSlugFromText(text: string) {
		const slug = text
			.normalize()
			.toLowerCase()
			.trim()
			.replace(/\s+/g, '-')
			.replace(/[^\w-]/g, '')
			.replace(/_/g, '-')
			.replace(/--+/g, '-')
			.replace(/-$/g, '')

		return new Slug(slug)
	}
}
```

Para criar um teste:
```typescript
// Slug.spec.ts

it('should be formatted a text to slug', () => {
	const slug = new Slug.createSlugFromText('This  is- a title')

	expect(slug.value).toEqual('this-is-a-title')
})
```