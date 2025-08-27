import MuiAccordion, { type AccordionProps as MuiAccordionProps } from "@mui/material/Accordion";
import MuiAccordionActions from "@mui/material/AccordionActions";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export type AccordionProps = Pick<
	MuiAccordionProps,
	"disableGutters" |
	"defaultExpanded" |
	"disabled" |
	"expanded" |
	"square"
>;

export function Accordion(props: AccordionProps) {
	return (
		<>
			<MuiAccordion {...props}>
				<MuiAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
					<Typography component="span">Accordion 1</Typography>
				</MuiAccordionSummary>
				<MuiAccordionDetails>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.
				</MuiAccordionDetails>
			</MuiAccordion>

			<MuiAccordion {...props}>
				<MuiAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
					<Typography component="span">Accordion 2</Typography>
				</MuiAccordionSummary>
				<MuiAccordionDetails>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.
				</MuiAccordionDetails>
			</MuiAccordion>

			<MuiAccordion {...props}>
				<MuiAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
					<Typography component="span">Accordion Actions</Typography>
				</MuiAccordionSummary>
				<MuiAccordionDetails>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget.
				</MuiAccordionDetails>
				<MuiAccordionActions>
					<Button>Cancel</Button>
					<Button>Agree</Button>
				</MuiAccordionActions>
			</MuiAccordion>
		</>
	);
}
