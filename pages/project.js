import Header from "@/components/Header";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function Project() {
  return (
    <>
      <Header />
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridGap: "20px",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Card
          sx={{
            borderRadius: "15px",
            height: "400px",
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{ height: "100%", width: "100%" }}
              component="video"
              controls
              alt="video"
            >
              <source
                src="/adele-someone-like-you_843273.mp4"
                type="video/mp4"
              />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Curlybrace
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/*2ème carte*/}
        <Card
          sx={{
            borderRadius: "15px",
            height: "400px",
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{ height: "100%", width: "100vw" }}
              component="video"
              controls
              alt="video"
            >
              <source
                src="/adele-someone-like-you_843273.mp4"
                type="video/mp4"
              />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Proxibanque
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/*3ème carte*/}
        <Card
          sx={{
            borderRadius: "15px",
            height: "400px",
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{ height: "100%", width: "100vw" }}
              component="video"
              controls
              alt="video"
            >
              <source
                src="/adele-someone-like-you_843273.mp4"
                type="video/mp4"
              />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Morning news
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/*4ème carte*/}
        <Card
          sx={{
            borderRadius: "15px",
            height: "400px",
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{ height: "100%", width: "100vw" }}
              component="video"
              controls
              alt="video"
            >
              <source
                src="/adele-someone-like-you_843273.mp4"
                type="video/mp4"
              />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Morning news
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </>
  );
}
