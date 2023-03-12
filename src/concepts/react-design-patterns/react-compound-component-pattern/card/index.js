import Card from "./card";

export default function index() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: '20px'
        }}>
            <Card>
                <Card.Heading>Standard image</Card.Heading>
                <Card.Image
                    src="https://picsum.photos/id/1001/500/200"
                    alt="Our trip to the beach"
                />
                <Card.Button>Toggle</Card.Button>
            </Card>
            <Card>
                <Card.Image
                    src="https://picsum.photos/id/1062/150/150"
                    alt="This is me"
                    type="avatar"
                />
                <Card.Heading>Avatar image</Card.Heading>
                <Card.Button>Toggle</Card.Button>
            </Card>
            <Card>
                <Card.Image
                    src="https://picsum.photos/500/200"
                    alt="This is me"
                    type="background"
                />
                <Card.Heading>Image as background</Card.Heading>
                <Card.Button>Toggle</Card.Button>
            </Card>
        </div>
    );
}
